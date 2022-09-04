import React from 'react'
import {View, Text} from 'react-native'
import CustomButton from '../CustomButton'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Auth } from 'aws-amplify'


const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn('onSignInFacebook')
    }
    const onSignInApple = () => {
        console.warn('onSignInApple')
    }
    const onSignInGoogle =  async () =>{
        await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google});
    }
    return (
        <>
            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor = "#E7EAF4" fgColor = "#4765A9" />
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor = "#FAE9EA" fgColor = "#DD4D44" />
            <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor = "#e3e3e3" fgColor= "#363636"/>
            </>
        )
}
export default SocialSignInButtons;