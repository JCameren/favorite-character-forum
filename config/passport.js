const passport = require("passport");
//Require oauth stragety
const GoogleStragety = require("passport-google-oauth").OAuth2Strategy;
//Takes instance of a stragety
const User = require("../models/user");

passport.use(
  new GoogleStragety(
    //Config obj
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    //verify cb fn
    //async/await fn
    async function (accessToken, refreshToken, profile, cb) {
      //A user has logged in with oauth
      try {
        let user = await User.findOne({ googleId: profile.id });
        //Existing user found
        if (user) return cb(null, user);
        //We have a new user via oauth
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        });
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
    cb(null, user._id)
});

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId))
})