import passport from "passport";
import "../../../lib/passport";

export default async function (req, res, next) {
   

  passport.authenticate("google", { scope: ['email', 'profile'], })(req, res, next);



}

