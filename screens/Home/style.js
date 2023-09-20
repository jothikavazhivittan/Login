import { StyleSheet } from "react-native";
const style=StyleSheet.create({
    image:{
    width:50,
    height:50,
    },
    imageContainer:{
        justifyContent:"center",
        flex:1,
       flexDirection:"row",
       alignItems:"center",
       padding:50,
       margin:20
    },
    textContain:{
        backgroundColor:"#00b4d8",
        borderRadius:50,
        padding:16,
        margin:10
 },
 textName:{
    fontFamily:"serif",
    fontSize:16,
    textAlign:"center",
    color:"#FFFFFF"
 }
})
export default style