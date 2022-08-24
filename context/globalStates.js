
import { useState } from 'react';
import { chooseColours } from '../Data/chooseColours';
import MerchContext from "./MerchContext";

const GlobalStates = (props) => {

    const [loginSidebar, setloginSidebar] = useState(false)
    const [singUpForm_Sidebar, setsingUpForm_Sidebar] = useState(false)
    const [signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar] = useState(false)


    //this the email in which otp is send during signUp and show this email in OTP sidebar
    const [OTPemail, setOTPemail] = useState(null)


    //youtuberPage
    const [youtuberLogo, setyoutuberLogo] = useState('')


    //customise page modal
    const [modalVisible, setmodalVisible] = useState(false);
    const [colours, setcolours] = useState(chooseColours);


    return (
        <MerchContext.Provider value={{ loginSidebar, setloginSidebar, singUpForm_Sidebar, setsingUpForm_Sidebar, signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar, OTPemail, setOTPemail, youtuberLogo, setyoutuberLogo, modalVisible, setmodalVisible, colours, setcolours }}>
            {props.children}
        </MerchContext.Provider>
    )
}




export default GlobalStates;