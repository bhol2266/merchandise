import { setCookies, deleteCookie } from "cookies-next";
import passport from "passport";
import "../../../lib/passport";
import Cookies from 'js-cookie'


export default async function (req, res, next) {
    passport.authenticate("facebook", (err, data) => {
        if (err || !data) {

            Cookies.remove('role');
            return res.redirect("https://www.closm.com//partner_with_us");
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

        setCookies('accessToken', data.accessToken, {
            req,
            res, maxAge: 900000
        });

        setCookies('refreshToken', data.refreshToken, {
            req,
            res, maxAge: 900000
        });


        return res.redirect("http://localhost:3000/dashboard");
        // return res.redirect("https://www.closm.com//dashboard");
        
    })(req, res, next);
}