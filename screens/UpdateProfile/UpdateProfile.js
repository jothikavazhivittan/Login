import { Image, StyleSheet, Text, TouchableOpacity, View ,Button, Alert} from 'react-native'
import React from 'react'
import style from './style'
import ImagePicker from 'react-native-image-crop-picker';
const UpdateProfile = ({navigation}) => {
  const openCamera=()=>{
    let option={
      
    }
  }
     
  return (
    <View style={{flex:1}}>
      <View style={style.imageContainer}>
        <Image
        style={style.image}
        resizeMode={'contain'}
        source={require('../../Assets/image/Login.png')}/>
      </View>
      <Text style={style.textName}>JothikaVazhivittan</Text>
       <TouchableOpacity style={style.updateContainer} onPress={()=>navigation.navigate('Home')}>
        <Text style={style.updateText}>LogOut</Text>
      </TouchableOpacity> 
      <View style={style.uploadimage}>
        <Button title='Upload image' onPress={()=>{
        }}/>
      </View>
    </View>
  )
}

export default UpdateProfile

const styles = StyleSheet.create({})