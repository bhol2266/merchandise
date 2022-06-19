import axios from "axios"
import { GetEmail, GetPassword, GetRefreshToken, GetToken, SetEmail, SetFirstName, SetLastName, SetPassword, SetRefreshToken, SetToken, SetUsername, } from './CookieLib';
import { setCookies, getCookie } from 'cookies-next'


const apiip = "https://closm.com"
const gqlip = `${apiip}/graphql/`
let token = `JWT ${GetToken()}`
let refreshToken = `${GetRefreshToken()}`

const QueryG = (query) => {
  return axios.get(`${gqlip}?query=${query}`)
}



const SignInUser = async (Email, password) => {
  var config = {
    method: 'post',
    url: gqlip + "?query=" + `mutation{
            tokenAuth(email:"${Email}",password:"${password}"){
                success
                errors
                token
                refreshToken
            }
          }`,
    headers: {
      'Accept': '*/*',
      'Content-Type': '*/*'
    },
  };

  const response = await axios(config);
  const responseData = await response.data
  return responseData.data.tokenAuth
}

const SignUpUser = async (email, firstName, lastName, phone, password1, password2) => {

  var config = {
    method: 'post',
    url: gqlip + "?query=" + `mutation{
            register(email:"${email}",username:"${email}",password1:"${password1}",password2:"${password2}",firstName:"${firstName}",lastName:"${lastName}"){
              success
              errors
              refreshToken
              token
            }
          }`,
    headers: {
      'Accept': '*/*',
      'Content-Type': '*/*'
    },
  };

  const response = await axios(config);
  const responseData = await response.data
  return responseData.data.register
}

const SendOTP = async (JWT_Token) => {

  var config = {
    method: 'post',
    url: gqlip + "?query=" + `query{
            sendVerificationOtp
       }`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${JWT_Token}`
    }
  };


  const response = await axios(config);
  const responseData = await response.data
  return responseData.data
}


const VerifyOTP = async (OTP, JWT_Token) => {

  var config = {
    method: 'post',
    url: gqlip + "?query=" + `mutation{
            verifyOtp(otp:"${OTP}"){
              success
              error
              message
            }
          }`,
    headers: {
      'Authorization': `JWT ${JWT_Token}`,
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);
  const responseData = await response.data
  return responseData.data.verifyOtp
}



const Addtobag = async (productid, colorid, quantity) => {

  await refreshTokenfunc()

  var config = {
    method: 'post',
    url: gqlip + "?query=" + `mutation{
            addItemToCart(colorId: ${colorid}, productId: "${productid}", quantity: ${quantity}) {
              success
              error
              itemBill
              totalBill
              discountPrice
              deliveryCharges
              message
              cart{
                id
                items{
                  id
                }
              }
            }
          }`,
    headers: {
      'Authorization': `JWT ${getCookie('token')}`,
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);
  return response

}

const GetbagItems = async () => {

  await refreshTokenfunc()

  var config = {
    method: 'get',
    url: gqlip + `?query=query{
            cart{
              id
                  items{
                color{
                  id
                  color
                }
                product{
                  id
                  title
                  price
                  mrp
                  discount
                }
                quantity
              }
              itemBill
              totalBill
              discountPrice
              discountCoupen{
                discount
                description
              }
              deliveryCharges
            }
          }`,
    headers: {
      'Authorization': `JWT ${getCookie('token')}`,
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);
  return response.data.data

}
const UpdatebagItems = async (quantity, cartId) => {

  await refreshTokenfunc()

  var config = {
    method: 'post',
    url: gqlip + `?query=mutation{
          updateCart(cartItemId:"${cartId}=",quantity:${quantity}){
            totalBill
            itemBill
            discountPrice
            deliveryCharges
            cartItem{
              id
              product{
                id
                image{
                  image
                }
              }
            }
          }`,
    headers: {
      'Authorization': `JWT ${getCookie('token')}`,
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);
  return response.data.data

}
const addAddress = async (firstName, lastName, shippingAddress, phoneNum, billingAddress, city, state, pincode, altPhoneNum) => {

  await refreshTokenfunc()

  var config = {
    method: 'post',
    url: gqlip + `?query=mutation{
          addShippingDetails(firstName:"${firstName}",lastName:"${lastName}",shippingAddress:"${shippingAddress}",phoneNum:"${phoneNum}",billingAddress:"${billingAddress}",city:"${city}",state:"${state}",pincode:"${pincode}",altPhoneNum:"${altPhoneNum}"){
            shippingDetails{
              id
            }
          }
        }`,
    headers: {
      'Authorization': `JWT ${getCookie('token')}`,
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);
  return response.data.data

}
const getAddress = async () => {

  await refreshTokenfunc()

  var config = {
    method: 'get',
    url: gqlip + `?query=query{
          shippingDetails{
            id
            firstName
            lastName
            billingAddress
            shippingAddress
            phoneNum
            altPhoneNum
            city
            pincode
            state
        
          }
        }`,
    headers: {
      'Authorization': `JWT ${getCookie('token')}`,
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);
  return response.data.data

}

const updateAddress = async (firstName, lastName, altPhoneNum, id) => {

  await refreshTokenfunc()

  var config = {
    method: 'post',
    url: gqlip + `?query=mutation{
        updateShippingDetails(id:${id},firstName:"${firstName}",lastName:"${lastName}",altPhoneNum:"${altPhoneNum}"){
          shippingDetails{
            id
            firstName
            lastName
            billingAddress
            shippingAddress
            pincode
            city
            state
            phoneNum
            altPhoneNum
          }
        }
      }`,
    headers: {
      'Authorization': `JWT ${getCookie('token')}`,
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);
  return response.data.data

}




const refreshTokenfunc = async () => {
  var config = {
    method: 'post',
    url: gqlip + "?query=" + `mutation{
            refreshToken(refreshToken: "${getCookie('refreshToken')}"){
                refreshToken
                errors
                success
                token
            }
        }`,
    headers: {
      'Accept': '*/*',
      'Content-Type': '*/*'
    }
  };


  const response = await axios(config);

  setCookies('refreshToken', response.data.data.refreshToken.refreshToken);
  setCookies('token', response.data.data.refreshToken.token);

}





export { apiip, gqlip, QueryG, token, SignUpUser, SendOTP, VerifyOTP, SignInUser, Addtobag, GetbagItems, UpdatebagItems, addAddress, getAddress, updateAddress }
