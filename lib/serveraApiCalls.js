import axios from "axios"
import { GetEmail, GetPassword, GetRefreshToken, GetToken, SetEmail, SetFirstName, SetLastName, SetPassword, SetRefreshToken, SetToken, SetUsername, } from './CookieLib';
import { setCookies, getCookie } from 'cookies-next'

const refreshTokenfunc = async () => {

    const rawResponse = await fetch(`${process.env.BACKEND_URL}refresh`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getCookie('refreshToken'),

        },
    });
    const content = await rawResponse.json();
    setCookies('accessToken', content.accessToken);

}

const saveYoutubersDetail = async () => {

    const data = {
        images: [{}]
    }


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/preview`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a: 1, b: 'Textual content' })
    });
    const content = await rawResponse.json();

    console.log(content);


}

const uploadSingleImage = async (file, fileName) => {

    await refreshTokenfunc()

    const formData = new FormData();
    formData.append("Image", file);
    formData.append("ImageName", fileName);


    const config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'content-type': 'multipart/form-data'
        },
    }
    const url = `${process.env.BACKEND_URL}api/v1/creator/preview`

    const rawResponse = await axios.post(url, formData, config)
    const res = await rawResponse.data

  
    return res;

}






export { refreshTokenfunc, saveYoutubersDetail, uploadSingleImage }
