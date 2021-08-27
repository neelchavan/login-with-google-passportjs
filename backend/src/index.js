import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors";
import "./passport.js";
import "./db/mongoose.js"
import googleRoutes from './routes/googleRoutes.js'

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
    httpOnly: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ALWAYS PLACE THE PASSPORT ROUTES BELOW THE PASSPORT INITIALIZE MIDDLEWARE
app.use(googleRoutes)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
