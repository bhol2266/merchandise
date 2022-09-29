import axios from "axios"

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
    setCookies('accessToken', content.accessToken, { maxAge: 600});
}




//Get products by id






const defaultAddress = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/addressdefault`, {
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
const postAddress = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/address`, {
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

const getAddress = async () => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/address`, {
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



const putAddress = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/address`, {
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


const deletetAddress = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/address`, {
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













export {refreshTokenfunc, postAddress, getAddress, putAddress, deletetAddress, defaultAddress }
