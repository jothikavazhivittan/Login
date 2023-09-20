import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import style from './style'


const LoginPage = ({navigation}) => {
  const[gmail,setGmail]=useState()
  const[passcode,setPassCode]=useState()
  return (
    <View>
      <TextInput 
    style={style.loginContainer}
      value={gmail}
      placeholder={'enter the email'}
      onChangeText={(value)=>{
        setGmail(value)
      }}/>

<TextInput 
    style={style.loginContainer}
      value={passcode}
      placeholder={'enter your Password'}
      onChangeText={(value)=>{
        setPassCode(value)
      }}/>
      <TouchableOpacity style={style.loginTextContainer} onPress={()=>navigation.navigate('UpdateProfile')}>
        <Text style={style.loginText}>UpdateProfile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({})