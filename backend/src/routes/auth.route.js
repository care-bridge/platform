import express from "express";
import { getNavbar } from "../controllers/auth.controller.js";

const router = express.Router();

// 🔥 Navbar
router.get("/navbar", getNavbar);

// 🔥 TEST routes
router.get("/login-test", (req, res) => {
  req.session.user = { name: "Yamin" };
  res.send("Logged in ✅");
});

router.get("/logout-test", (req, res) => {
  req.session.destroy();
  res.send("Logged out ❌");
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send(`
      <a href="/login" role="button">Login</a>
    `);
  });
});

export default router;