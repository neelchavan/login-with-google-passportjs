import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
GoogleStrategy.Strategy;

import User from "./model/userModel.js"

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try{
    const user = await User.findById(id)
    done(null, user)
  } catch (e){
    console.log(e);
  } 
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "206624177433-mg798u8s5d2n8ji3ijo6b1rhbcvhm3tl.apps.googleusercontent.com",
      clientSecret: "a4T_uGGeAf4Bhyl3HJ9Z6_3P",
      callbackURL: "http://localhost:4000/auth/google/dashboard",
    },
    async (accessToken, refreshToken, profile, done) => {
      try{
        const user = await User.findOne({googleId: profile.id})
        if (user){
          done(null, user)
        } else {
          const user = new User({
            googleId: profile.id,
            email : profile._json.email,
            username: profile.displayName, 
            imageUrl: profile._json.picture,
          })
          await user.save()
          done(null, user)
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  )
);

export default passport;
// module.exports = passport;
