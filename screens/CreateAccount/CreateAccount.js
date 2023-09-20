import { StyleSheet, Text, TextInput, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import style from './style'
const CreateAccount = ({navigation}) => {
  const [firstname,setFirstName]=useState()
  const [lastname,setLastName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassWord]=useState()
  return (
    <View>
      <TextInput 
      style={style.inputContainer}
      placeholder={'First Name'}
      value={firstname}
      onChangeText={(value)=>{
        setFirstName(value)
      }}/>
      <TextInput
      style={style.inputContainer}
       value={lastname}
       placeholder={'LastName'}
       onChangeText={(value)=>{
        setLastName(value)
       }}/>

       <TextInput
      style={style.inputContainer}
      value={email} 
       placeholder={'Email'}
       onChangeText={(value)=>{
        setEmail(value)
       }}/>
       <TextInput
       style={style.inputContainer} 
       value={password}
        placeholder={'PassWord'}
        secureTextEntry={true}
        autoFocus={true}
        onChangeText={(value)=>{
          setPassWord(value)
        }}/>
            
      <TouchableOpacity style={style.updateContainer} onPress={()=>navigation.navigate('UpdateProfile')}>
          <Text style={style.updateText}>Update Profile</Text>
        </TouchableOpacity>
        </View>
  )
}


export default CreateAccount

const styles = StyleSheet.create({})