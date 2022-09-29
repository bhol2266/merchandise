import axios from "axios"

import { setCookies, getCookie } from 'cookies-next'
import { refreshTokenfunc } from './Address_API';





//Get products by id


const getProductbyID = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/productbyid`, {
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


//Wishlist API
const addProductWishlist = async (data) => {


    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/wishlist`, {
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

const getProductWishlist = async () => {


    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/wishlist`, {
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

const deleteProductWishlist = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/wishlist`, {
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


//Cart API
const addProductCart = async (data) => {


    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/cart`, {
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

const getProductCart = async () => {


    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/cart`, {
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


const deleteProductCart = async (data) => {

    await refreshTokenfunc()


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/v1/user/cart`, {
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










export { refreshTokenfunc, getProductbyID, addProductWishlist, getProductWishlist, deleteProductWishlist, addProductCart, getProductCart, deleteProductCart }
