import { Webhook } from "svix";
import User from "../model/user.js";

export const clerkwebhooks = async (req, res) => {
  try {
    const webhookSecret =
      process.env.CLERK_WEBHOOK_SECRET || process.env.Clerk_Webhook_Secret;

    if (!webhookSecret) {
      throw new Error("Missing CLERK_WEBHOOK_SECRET (or Clerk_Webhook_Secret)");
    }

    const wh = new Webhook(webhookSecret);

    const raw = req.body.toString();

    const event = await wh.verify(raw, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { type, data } = event || {};
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
        return res.json({ message: "Event type not handled" });
    }
  } catch (error) {
    console.error("Error in clerk webhook:", error.message);
    return res.status(400).json({ message: "Invalid webhook" });
  }
};
