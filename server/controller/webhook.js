import { Webhook } from "svix";
import User from "../model/user.js";

export const clerkwebhooks = async (req, res) => {
  try {
    const webhookSecret =
      process.env.CLERK_WEBHOOK_SECRET || process.env.Clerk_Webhook_Secret;

    if (!webhookSecret) {
      console.error("Webhook secret is missing in environment variables");
      return res.status(500).json({ 
        message: "Webhook configuration error",
        error: "Missing webhook secret" 
      });
    }

    // Check if req.body exists and is a Buffer
    if (!req.body || !Buffer.isBuffer(req.body)) {
      console.error("Invalid request body:", typeof req.body);
      return res.status(400).json({ 
        message: "Invalid request body",
        error: "Body must be raw buffer" 
      });
    }

    const wh = new Webhook(webhookSecret);
    const raw = req.body.toString("utf8");

    // Verify webhook signature
    const payload = wh.verify(raw, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { type, data } = payload;
    const eventType = (type || "").toLowerCase();

    switch (eventType) {
      case "user.created": {
        const userData = {
          _id: data.id,
          name: data.first_name + " " + data.last_name,
          email: data.email_addresses[0].email_address,
          image: data.profile_image_url,
          resume: "",
        };

        await User.create(userData);
        return res.json({ message: "User created successfully" });
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.profile_image_url,
        };

        await User.findByIdAndUpdate(data.id, userData);
        return res.json({ message: "User updated successfully" });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({ message: "User deleted successfully" });
      }

      default:
        console.log("Unhandled event type:", eventType);
        return res.json({ message: "Event type not handled" });
    }
  } catch (error) {
    console.error("Error in clerk webhook:");
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("Headers:", req.headers);
    
    return res.status(400).json({ 
      message: "Invalid webhook",
      error: error.message 
    });
  }
};
