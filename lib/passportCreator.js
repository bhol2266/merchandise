import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
    "google",
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.FRONTEND_URL}api/creator/google/callback`,

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

                const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/signup`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const response = await rawResponse.json();
                console.log(response.data);
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
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: `${process.env.FRONTEND_URL}api/creator/facebook/callback`,
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



                const rawResponse = await fetch('https://king-prawn-app-d3yfg.ondigitalocean.app/api/v1/user/signup', {
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



