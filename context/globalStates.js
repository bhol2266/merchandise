
import { useState } from 'react';
import { chooseColours } from '../Data/chooseColours';
import { creatorProducts } from '../Data/creatorProducts';
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
    const [PreviewMode, setPreviewMode] = useState(false)

    const [canvas, setcanvas] = useState(null)
    const [canvasDivRef, setcanvasDivRef] = useState(null)
    const [selectedColourIndex, setselectedColourIndex] = useState(0); // 0 indicates the index position of the tshirts colour array

    const [selectedTshirtsForUpload, setselectedTshirtsForUpload] = useState([])
    const [ModalPublishVisible, setModalPublishVisible] = useState(false);

    //Published Products
    const [PriorityNumberModalVisible, setPriorityNumberModalVisible] = useState(false);
    const [currentIndex, setcurrentIndex] = useState(0);
    const [creatorsProductList, setcreatorsProductList] = useState(creatorProducts);



    //Navbar for user or creator 
    const [NavbarUserORcreator, setNavbarUserORcreator] = useState('user');





    return (
        <MerchContext.Provider value={{
            loginSidebar,
            setloginSidebar,
            singUpForm_Sidebar,
            setsingUpForm_Sidebar,
            signUpFormOTP_Sidebae,
            setsignUpFormOTP_Sidebar,
            OTPemail,
            setOTPemail,
            youtuberLogo,
            setyoutuberLogo,
            modalVisible,
            setmodalVisible,
            colours,
            setcolours,
            PreviewMode,
            setPreviewMode,
            canvas,
            setcanvas,
            canvasDivRef,
            setcanvasDivRef,
            selectedColourIndex,
            setselectedColourIndex,
            selectedTshirtsForUpload,
            setselectedTshirtsForUpload,
            ModalPublishVisible,
            setModalPublishVisible,
            PriorityNumberModalVisible,
            setPriorityNumberModalVisible,
            currentIndex, setcurrentIndex,
            creatorsProductList, setcreatorsProductList,
            NavbarUserORcreator, setNavbarUserORcreator
        }}>
            {props.children}
        </MerchContext.Provider>
    )
}




export default GlobalStates;