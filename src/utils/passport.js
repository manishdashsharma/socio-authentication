// passportConfig.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import config from './index.js';
import config from '../config/index.js';

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL,
    passReqToCallback: true,
},
    (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile);
    }
));

export default passport;
