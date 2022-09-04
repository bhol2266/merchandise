import { setCookies,deleteCookie } from "cookies-next";
import passport from "passport";
import "../../../lib/passport";

export default async function (req, res, next) {
    passport.authenticate("google", (err, data) => {
        if (err || !data) {

            deleteCookie('role', { req, res });

            alert('Something went wrong')
            return res.redirect("/partner_with_us");
        }


        // set cookie and send redirect


        setCookies('name', data.name, {
            req,
            res, maxAge: 900000
        });

      

        setCookies('email', data.email, {
            req,
            res, maxAge: 900000
        });

        setCookies('accessToken', "Bearer " + data.accessToken, {
            req,
            res, maxAge: 900000
        });

        setCookies('refreshToken', data.refreshToken, {
            req,
            res, maxAge: 900000
        });


        return res.redirect("/dashboard");
    })(req, res, next);
}