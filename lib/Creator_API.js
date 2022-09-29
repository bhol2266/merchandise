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


//This is for file image
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

//This is for Base64 image
const uploadImageBase64 = async (base64file, fileName) => {

    await refreshTokenfunc()

    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/image`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            , 'Authorization': 'Bearer ' + getCookie('accessToken'),
        },
        body: JSON.stringify({ imageData: base64file })
    });
    const content = await rawResponse.json();

    return content;
}



//customisePage  Preview and edits
const saveYoutubersDetail = async (creatorName, creatorUrl, creatorDescription, creatorLogo, creatorBanner) => {

    await refreshTokenfunc()

    const data = {
        creatorName: creatorName,
        creatorUrl: creatorUrl,
        creatorDescription: creatorDescription,
        creatorLogo: creatorLogo,
        creatorBanner: creatorBanner
    }


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/preview`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();

    return content;


}

const getYoutubersDetail = async () => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/preview`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
   
    });
    const content = await rawResponse.json();

    return content;


}


const getYoutubersProductsList = async (creatorName) => {

    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/${creatorName}`);
    const content = await rawResponse.json();
    return content;
}



//customisePage  Publish
const publishTshirtsDesign = async (dataa) => {

    await refreshTokenfunc()


    const { productName, discountPrice, mrp, productDescription, category, artUrl, size, color, creatorName, publishStatus } = dataa

    const data = {
        productName: productName,
        discountPrice: discountPrice,
        mrp: mrp,
        productDescription: productDescription,
        category: category,
        artUrl: artUrl,
        size: size, //Array
        color: color,//Array objects
        creatorName: creatorName,
        publishStatus: publishStatus,
    }


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/publish`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    return content;
}





//Published products GET UPDATE DELETE


const getPublishedProducts = async () => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/publishedproducts`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
   
    });
    const content = await rawResponse.json();

    return content;


}
const putPublishedProducts = async (data) => {

    await refreshTokenfunc()

  

    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/publishedproducts`, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
   
    });
    const content = await rawResponse.json();

    return content;


}



const deletePublishedProducts = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/publishedproducts`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    });
    const content = await rawResponse.json();

    return content;


}


const setPublishedProductsPriority = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/publishproducts/priority`, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    });
    const content = await rawResponse.json();

    return content;


}

const getUnitTraking = async () => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/creator/unit/track`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getCookie('accessToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
   
    });
    const content = await rawResponse.json();

    return content;


}




export { refreshTokenfunc, saveYoutubersDetail, uploadSingleImage, publishTshirtsDesign, uploadImageBase64,getYoutubersDetail,getPublishedProducts, putPublishedProducts, deletePublishedProducts,setPublishedProductsPriority,getYoutubersProductsList,getUnitTraking }
