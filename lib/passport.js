import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
    "google",
    new GoogleStrategy({
        clientID: '737624608726-it8582ctpmd6i8b79th0v2hqfrf5clcg.apps.googleusercontent.com',
        clientSecret: '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',
        // callbackURL: "https://www.closm.com/api/google/callback",
        callbackURL: "http://localhost:3000/api/google/callback",

        passReqToCallback: true

    },
        async function (request, accessToken, refreshToken, profile, done) {

            try {


                const displayName = profile.displayName
                const firstName = displayName.substring(displayName.length[0], displayName.indexOf(' ')).trim();
                const lastName = displayName.substring(displayName.indexOf(' '), displayName.length).trim();




                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    email: profile.emails[0].value,
                    profilePicUrl: profile.photos[0].value,
                    accountType: "google"
                }

                const rawResponse = await fetch('http://localhost:5000/api/v1/user/signup', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const response = await rawResponse.json();

                if (response.sucess) {
                    return done(null, response.data);

                } else {
                    done(err, false, { message: "Internal server error" });
                }


            } catch (err) {
                console.error(err);
                done(err, false, { message: "Internal server error" });
            }
        }
    )
);



passport.use(
    new FacebookStrategy({
        clientID: '4c30ed043dbfc9e5b59e9db484283609',
        clientSecret: '1762910734100962',
        // callbackURL: "https://www.closm.com/api/facebook/callback",
        callbackURL: "http://localhost:3000/api/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']

    },
        async function (request, accessToken, refreshToken, profile, done) {

            try {


                const displayName = profile.displayName
                const firstName = displayName.substring(displayName.length[0], displayName.indexOf(' ')).trim();
                const lastName = displayName.substring(displayName.indexOf(' '), displayName.length).trim();




                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    email: profile.emails[0].value,
                    profilePicUrl: profile.photos[0].value,
                    accountType: "google"
                }


                console.log(data);

                const rawResponse = await fetch('http://localhost:5000/api/v1/user/signup', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const response = await rawResponse.json();

                if (response.sucess) {
                    return done(null, response.data);

                } else {
                    done(err, false, { message: "Internal server error" });
                }


            } catch (err) {
                console.error(err);
                done(err, false, { message: "Internal server error" });
            }
        }
    )
);



