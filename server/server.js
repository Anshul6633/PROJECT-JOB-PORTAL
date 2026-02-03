
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
app.use(express.json());

//route
app.get("/", (req, res) =>res.send("Api is running"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");

});
app.post("/webhook", clerkwebhooks);
//server listen

//POrt
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

sentry.setupConnectErrorHandler(app);


