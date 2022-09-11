import { useState } from "react";
import { uploadSingleImage } from "../lib/Creator_API";





const Bs = () => {
    const [images, setimages] = useState([]);

    const cofirmButtonClick = async (e) => {
        e.preventDefault()


        let uploadImagesURL = []

        for (let index = 0; index < 2; index++) {

            try {
                const response = await uploadSingleImage(images[index], 'filename')
                if (response.sucess) {
                    uploadImagesURL.push(response.data.imageURL)
                } else {
                    // alert(response.message)
                }
            } catch (error) {
                // alert(error)
                setbeatLoader(false)
                return
            }
        }

        console.log(uploadImagesURL);




    }

    // console.log(setimages);

    const onChangeListner = async (e) => {
        let file = e.target.files[0]
        let fileName = file.name.replace('.png', '')

        console.log(file);
        console.log(fileName);

        const response = await uploadSingleImage(file, fileName)
        if (response.sucess) {
            console.log(response.data.imageURL)
        } else {
            alert(response.message)
        }

    }




    return (

        <div>
            <input onChange={onChangeListner} type="file" name="file" id="file" multiple="multiple" />
            <button onClick={cofirmButtonClick} className="scale-150">cofirmButtonClick</button>

        </div>
    )
};
export default Bs;