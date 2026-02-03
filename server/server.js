import express from "express";
import './config/instrument.js'
import * as sentry from "@sentry/node";

import cors from "cors";
import 'dotenv/config';
import connectdb from "./config/db.js";
import { clerkwebhooks } from "./controller/webhook.js";

const app = express();

// connect to db
await connectdb();

// Middleware
app.use(cors());

// 🔥 WEBHOOK ROUTE FIRST (RAW BODY)
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  clerkwebhooks
);

// After webhook, enable normal JSON parsing
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("Api is running"));

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.get("/checkhealth", (req, res) =>
  res.json({ message: "Server is healthy" })
);

const PORT = process.env.PORT || 5000;

sentry.setupConnectErrorHandler(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
