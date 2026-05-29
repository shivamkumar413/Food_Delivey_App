import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';

export default function LoginPage() {
    
    const [ loginCredentials,setLoginCredentials ] = useState({
        email : '',
        password : '',
    })
    const navigation = useNavigation();

    function handleLogin(){
        if(loginCredentials.email === '' || loginCredentials.password === ''){
            return;
        }
        // @ts-ignore
        navigation.navigate('Main')
    }
    

    return (
        <KeyboardAvoidingView 
            style={{flex : 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>
                <Text style={{fontSize : 35,marginBottom : 20}}>
                    Sign In
                </Text>
                <TextInput 
                    placeholder='Email'
                    style={styles.textInput}
                    keyboardType="email-address"
                    value={loginCredentials.email}
                    onChangeText={(email)=>{
                        setLoginCredentials({
                            ...loginCredentials,
                            email
                        })
                    }}
                />
                <TextInput 
                    placeholder='Password'
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={loginCredentials.password}
                    onChangeText={(password)=>{
                        setLoginCredentials({
                            ...loginCredentials,
                            password
                        })
                    }}
                />
                <Pressable 
                    onPress={()=>handleLogin()}
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    textInput : {
        backgroundColor : 'white',
        width : '80%',
        paddingHorizontal : 20,
        paddingVertical : 12,
        marginHorizontal : 50,
        marginBottom : 10,
        borderRadius : 10,
        borderWidth : 0.5,
        borderColor : 'gray'
    },
    loginBtn : {
        width : '80%',
        backgroundColor : '#EA6A00',
        paddingHorizontal : 20,
        paddingVertical : 8,
        marginTop : 10,
        borderRadius : 10,
    },
    loginText : {
        fontSize : 17,
        textAlign : 'center',
        fontWeight : '500',
        color : '#FFFFFF'
    }
})