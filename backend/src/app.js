import express from "express";
import cors from "cors";

import urgentHelpRoutes from "./modules/urgentHelp/urgentHelp.route.js";
import healthCheckRouter from "./routes/healthcheck.route.js";
import session from "express-session";



const app = express();

app.use(express.json());
app.use(cors());

app.use(session({
  secret: "carebridge-secret",
  resave: false,
  saveUninitialized: true
}));

// routes
import authRoutes from "./routes/auth.route.js";
app.use("/auth", authRoutes);
app.use("/api/urgent-help", urgentHelpRoutes);
app.use("/health", healthCheckRouter);

export default app;