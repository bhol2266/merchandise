import axios from "axios"

import { setCookies, getCookie } from 'cookies-next'
import { refreshTokenfunc } from './Address_API';




const orderComplete_API = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/order/complete`, {
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

const orderGet_API = async () => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/order/complete`, {
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















export { orderComplete_API, orderGet_API }
