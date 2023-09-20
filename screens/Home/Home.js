import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import style from './style'
const Home = ({navigation}) => {
  return (
    <View>
        <View style={style.imageContainer}>
            <Image
            style={style.image}
            resizeMode={'contain'}
             source={require('../../Assets/image/Login.png')}/>
        </View>
      <TouchableOpacity style={style.textContain} onPress={()=>navigation.navigate('Create Account')}>
         <Text style={style.textName}>Create Account</Text>
      </TouchableOpacity>
       <TouchableOpacity style={style.textContain} onPress={()=>navigation.navigate('Login Page')}>
          <Text style={style.textName}>Login</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})