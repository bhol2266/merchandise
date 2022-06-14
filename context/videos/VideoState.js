import videosContext from "./videosContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";






const VideoState = (props) => {

    const [loginSidebar, setloginSidebar] = useState(false)
    const [singUpForm_Sidebar, setsingUpForm_Sidebar] = useState(false)
    const [signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar] = useState(false)


    //this the email in which otp is send during signUp and show this email in OTP sidebar
    const [OTPemail, setOTPemail] = useState(null)


    //youtuberPage
    const [youtuberLogo, setyoutuberLogo] = useState('')









    return (
        <videosContext.Provider value={{ loginSidebar, setloginSidebar, singUpForm_Sidebar, setsingUpForm_Sidebar, signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar, OTPemail, setOTPemail,youtuberLogo, setyoutuberLogo }}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;