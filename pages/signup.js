import React from 'react'
import { LoginForm } from '../components/LoginForm'
import { SignUpForm } from '../components/SignUpForm'
import { SignUpFormOTP } from '../components/SignUpFormOTP'

const Signup = () => {
    return (
        <div>
            <SignUpFormOTP/>
            {/* <LoginForm />
            <SignUpForm /> */}
        </div>
    )
}
export default Signup