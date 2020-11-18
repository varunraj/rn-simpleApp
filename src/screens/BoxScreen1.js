import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


const BoxScreen1 = ()=>{
    return <View style={styles.viewStyle}>
        <View style={styles.view1Style}></View>
        <View style={styles.view2Style}></View>
        <View style={styles.view3Style}></View>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor:'black',
        //alignItems:"center",
        flexDirection:"row",
        //justifyContent:'center',
        height:200,
        //alignItems:"str", //=> default even if we dont set
        justifyContent:'space-between'
        
    },
    view1Style:{
        height:50,
        width:50,
        backgroundColor:'red'
        //flex:3
        //margin:10
        
    },
    view2Style:{
        height:50,
        width:50,
        backgroundColor:'yellow',
        marginTop:50
        //alignSelf:'center' // apply moving to center only to child 2
        //position:'absolute',
        //top:10
        //flex:1
        //margin:10
        
    },
    view3Style:{
        height:50,
        width:50,
        backgroundColor:'green'
        //flex:1
        //margin:10
        
    }
})

export default BoxScreen1;