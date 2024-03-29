
import { useState } from 'react';
import MerchContext from "./MerchContext";
import { tshirtscotton } from '../Data/tshirtcotton';
import { description_tshirtCotton } from '../Data/tshirtcotton'

const GlobalStates = (props) => {

    const [loginSidebar, setloginSidebar] = useState(false)
    const [singUpForm_Sidebar, setsingUpForm_Sidebar] = useState(false)
    const [signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar] = useState(false)


    //this the email in which otp is send during signUp and show this email in OTP sidebar
    const [OTPemail, setOTPemail] = useState(null)


    //youtuberPage
    const [youtuberLogo, setyoutuberLogo] = useState('')


    //customise page modal
    const [colorModalVisible, setcolorModalVisible] = useState(false);
    const [priorityColorModalVidible, setpriorityColorModalVidible] = useState(false);
    const [colours, setcolours] = useState(tshirtscotton);
    const [PreviewMode, setPreviewMode] = useState(false)

    const [canvas, setcanvas] = useState(null)
    const [canvasDivRef, setcanvasDivRef] = useState(null)
    const [selectedColourIndex, setselectedColourIndex] = useState(0); // 0 indicates the index position of the tshirts colour array

    const [selectedTshirtsForUpload, setselectedTshirtsForUpload] = useState([])
    const [ModalPublishVisible, setModalPublishVisible] = useState(false);

    //Published Products
    const [PriorityNumberModalVisible, setPriorityNumberModalVisible] = useState(false);
    const [currentIndex, setcurrentIndex] = useState(0);
    const [creatorsProductList, setcreatorsProductList] = useState([]);

    //This is to check for editing is done or not in  published items 
    const [Edited, setEdited] = useState(false);



    //Uploaded arts
    const [uploadedArts, setuploadedArts] = useState([]);

    //Customise page selector for preview , publish, published products
    const [customisePageSelector, setcustomisePageSelector] = useState('PREVIEW');

    //Navbar for user or creator 
    const [NavbarUserORcreator, setNavbarUserORcreator] = useState('user');

    //final Data for publishing tshirts in publishModal
    const [publishData, setpublishData] = useState({});


    //Address/Checkout page
    const [editAddress, seteditAddress] = useState(false);
    const [editAddressArrayIndex, seteditAddressArrayIndex] = useState(null);
    const [AddressForCheckoutIndex, setAddressForCheckout] = useState(0);
    const [addressArray, setaddressArray] = useState([]);


    //Sold Units Page
    const [soldPageSelector, setsoldPageSelector] = useState('sold_units');

    //Size Chart modal
    const [SizeChartModalVisible, setSizeChartModalVisible] = useState(false);


    //final Data for publishing tshirts in publishModal
    const [categorySelected, setcategorySelected] = useState("T-SHIRT (Cotton)");  //"T-SHIRT (Blended)", "HOODIE"


    //This is the decription of customised product which is imported from local json of products
    const [productDescription, setproductDescription] = useState(description_tshirtCotton);

    //Alert Bar
    const [AlertcloseTimer, setAlertcloseTimer] = useState(false);
    const [Alert_Message, setAlert_Message] = useState("Google Search Console Tools");
    const [Alert_Type, setAlert_Type] = useState(true);



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
            colorModalVisible,
            setcolorModalVisible,
            priorityColorModalVidible,
            setpriorityColorModalVidible,
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
            uploadedArts, setuploadedArts,
            customisePageSelector, setcustomisePageSelector,
            publishData, setpublishData,
            Edited, setEdited,
            editAddress, seteditAddress,
            editAddressArrayIndex, seteditAddressArrayIndex,
            AddressForCheckoutIndex, setAddressForCheckout,
            addressArray, setaddressArray,
            soldPageSelector, setsoldPageSelector,
            NavbarUserORcreator, setNavbarUserORcreator,
            SizeChartModalVisible, setSizeChartModalVisible,
            categorySelected, setcategorySelected,
            productDescription, setproductDescription,
            Alert_Message, setAlert_Message,
            Alert_Type, setAlert_Type,
            AlertcloseTimer, setAlertcloseTimer


        }}>
            {props.children}
        </MerchContext.Provider>
    )
}




export default GlobalStates;