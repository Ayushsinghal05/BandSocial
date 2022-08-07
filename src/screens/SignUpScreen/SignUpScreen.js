import React, { useState } from 'react'
import { View, Text,StyleSheet,ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
    const {control, handleSubmit,watch} = useForm();
    const pwd = watch('password')
    const navigation = useNavigation();
    
    const onRegisterPressed = async(data) => {
        const {username, password, email, name} = data;
        try{
            const response = await Auth.signUp({
                username,
                password,
                attributes: {email, name, preferred_username: username}
            });

            navigation.navigate('ConfirmEmail',{username});
            
        } catch (e) {
            Alert.alert('Oops', e.message)
        }
    }
    const onSignInPress= () => {
        navigation.navigate('SignIn')
    }
    const onTermsofUsePressed = () => {
        console.warn('onTermsofUsePressed')
    }
    const onPrivacyPressed =  () => {
        console.warn('onPrivacyPressed')
    }

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput 
                    name = "name"
                    control = {control}
                    placeholder="Name" 
                    rules = {{required: 'Name is required'}}
                />
                <CustomInput 
                    name = "username"
                    control = {control}
                    placeholder="Username" 
                    rules = {{required: 'Username is required'}}
                />
                
                <CustomInput 
                    name = "email"
                    control = {control}
                    placeholder="Email" 
                    rules = {{pattern: {value :EMAIL_REGEX, message: 'Email is invalid'}, required: 'Email is required'}}
                />
                
                <CustomInput 
                    name  = "password"
                    control = {control}
                    placeholder = "Password" 
                    secureTextEntry 
                    rules = {{required: 'Password is required'}}
                />
                <CustomInput 
                    name = "password-repeat"
                    control = {control}
                    placeholder = "Repeat Password" 
                    secureTextEntry
                    rules = {{
                        validate: value => value === pwd || 'Passwords do not match'
                    }}
                    />
                <CustomButton text="Register" onPress= {handleSubmit(onRegisterPressed)} />
                <Text style = {styles.text}>
                    By registering, you confirm that you accept our {' '}
                    <Text style = {styles.link} onPress = {onTermsofUsePressed}>Terms of Use </Text> and{' '}
                    <Text style = {styles.link} onPress = {onPrivacyPressed}>Privacy Policy</Text>
                </Text>
                <SocialSignInButtons/>
                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color : 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default SignUpScreen