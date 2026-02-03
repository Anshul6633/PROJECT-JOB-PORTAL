import { Webhook } from "svix";
import User from "../model/user.js";


// express import removed (not used)

//API controller  Function to manage clerk  user with database

export const clerkwebhooks = async(req,res)=>{
    try {
        //create svix instance  with clerk webhook secret
        const wh = new Webhook(process.env.Clerk_Webhook_Secret);
        //get the payload

        // Use the raw request body (if available) for verification; fall back to the parsed body.
        const raw = req.rawBody ? req.rawBody.toString() : JSON.stringify(req.body);

        await wh.verify(raw,{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        //verify the payload
        const { type, data } = req.body;
        const eventType = (type || '').toLowerCase();

        //switch case to handle different event types
        switch (eventType) {
            case "user.created":
               {
                           const userData = {
                            _id:data.id,
                             name:data.first_name + " " + data.last_name,
                              email:data.email_addresses[0].email_address,
                            image:data.profile_image_url,
                            resume:"",
                           }
                           await User.create(userData);
                           res.json({message:"User created successfully"})
                           break;
               }
                 case "user.updated":
                {
                     const userData = {
                            
                            email:data.email_addresses[0].email_address,
                            name:data.first_name + " " + data.last_name,
                            image:data.profile_image_url,
                        
                           }
                           await User.findByIdAndUpdate(data.id,userData)
                           res.json({message:"User updated successfully"})
                           break;
                }
                 case "user.deleted":  
             {
                await User.findByIdAndDelete(data.id);
                res.json({message:"User deleted successfully"}) 
                break;
             }
             default:
                res.json({message:"Event type not handled"})
                break;
        }
        
    } catch (error) {
        console.error("Error in clerk webhook:", error);
        console.error("Svix headers:", {
            id: req.headers["svix-id"],
            timestamp: req.headers["svix-timestamp"],
            signature: req.headers["svix-signature"],
        });
        console.error("raw payload snippet:", req.rawBody ? req.rawBody.toString().slice(0,200) : JSON.stringify(req.body).slice(0,200));
        res.status(400).json({ message: "Invalid webhook" });
    }
}