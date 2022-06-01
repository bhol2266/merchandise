import videosContext from "./videosContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";






const VideoState = (props) => {

  const [loginSidebar, setloginSidebar] = useState(false)
  const [singUpForm_Sidebar, setsingUpForm_Sidebar] = useState(false)
  const [signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebae] = useState(false)


  





    return (
        <videosContext.Provider value={{loginSidebar, setloginSidebar,singUpForm_Sidebar, setsingUpForm_Sidebar,signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebae}}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;