import videosContext from "./videosContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";






const VideoState = (props) => {

    const router = useRouter();
    const [location, setlocation] = useState(null)


  





    return (
        <videosContext.Provider value={{ location,setlocation }}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;