import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import CreateAccount from "../screens/CreateAccount/CreateAccount";
import LoginPage from "../screens/LoginPage/LoginPage";
import UpdateProfile from "../screens/UpdateProfile/UpdateProfile";
const Stack=createStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator initialRouteName={Home}>
            <Stack.Screen name="Home" component={Home} options={{header:()=>null,
            headerShown:false}}/>
            <Stack.Screen name="Create Account" component={CreateAccount} 
            options={{headerShown:false}}/>
            <Stack.Screen name="Login Page" component={LoginPage} options={{headerShown:false}}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default MyStack