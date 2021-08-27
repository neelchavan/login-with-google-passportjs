import express from 'express'
import passport from 'passport'
import isLoggedIn from '../middleware/auth.js'

const router = new express.Router()

const successRoute = "http://localhost:3000/dashboard";

router.get("/", (req, res) => {
  res.send("you are not logged in");
});

router.get("/failed", (req, res) => {
  res.send("you failed to log in");
});

router.get("/good", isLoggedIn, (req, res) => {
  res.json(req.user);
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/dashboard",
  passport.authenticate("google", {
    failureRedirect: "/failed",
    successRedirect: successRoute,
  })
);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

export default router