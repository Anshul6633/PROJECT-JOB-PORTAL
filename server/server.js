
import express from "express";
import './config/instrument.js'
import * as sentry from "@sentry/node";

import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";
import connectdb from "./config/db.js";
import { clerkwebhooks } from "./controller/webhook.js";
//INITIALIZE SERVER
const app = express();

//connect to db
await connectdb()

// force public DNS for this Node process (must run before any DNS lookups / mongoose.connect)


//Middleware
app.use(cors());
// Preserve raw body for webhook signature verification (Svix requires the exact raw payload)
app.use(express.json({ verify: (req, _res, buf) => { req.rawBody = buf } }));

//route
app.get("/", (req, res) =>res.send("Api is running"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");


});
app.get("/checkhealth", (req, res) => res.json({message:"Server is healthy"}));

app.post("/webhook", clerkwebhooks);
//server listen

//POrt
const PORT = process.env.PORT || 5000;
sentry.setupConnectErrorHandler(app);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



