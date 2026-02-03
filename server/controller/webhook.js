import { Webhook } from "svix";
import User from "../model/user.js";

//API controller  Function to manage clerk  user with database

export const clerkwebhooks = async(req,res)=>{
    try {
        //create svix instance  with clerk webhook secret
        const wh = new Webhook(process.env.Clerk_Webhook_Secret);
        //get the payload
      
        await wh.verify(Json.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        //verify the payload
        const {type, data} = req.body;

        //switch case to handle different event types
        switch (type) {
            case "user.created":
               {
                           const userData = {
                            _id:data.id,
                            email:data.email_addresses[0].email_address,
                            name:data.first_name + " " + data.last_name,
                            image:data.profile_image_url,
                            resume:"",
                           }
                           await User.create(userData);
                           req.Json({message:"User created successfully"})
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
                           req.Json({message:"User updated successfully"})
                           break;
                }
             case "user.deleted":  
             {
                await User.findByIdAndDelete(data.id);
                req.Json({message:"User deleted successfully"}) 
                break;
             }
             default:
                req.Json({message:"Event type not handled"})
                break;
        }
        
    } catch (error) {
        console.log("Error in clerk webhook:",error);
        res.status(400).Json({message:"Invalid webhook"})
        
    }
}