import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

// BOX MODEL : Apply padding, border and margin like in CSS


// Use Box Model to update padding, border and margin of an element 

//1) 1) FLEX on PARENT

// Use flex Box model to lay out different child element under the parent
// 3 main properties on parent - 1) alignItems 2) justifyContent 3) flexDirection 

// in flexBox model , use 'alignItems:'stretch' => Stretch across parent => default option
// in flexBox model , use 'alignItems:'flex-start', 'flex-end' => place start/end of parent
// in flexBox model , use 'alignItems:'center' => centre of parent
// in flexBox model , use 'flexDirection': column => lay children in column => default option
// in flexBox model , use 'flexDirection': row => lay children in row 
// in flexBox model , use 'justifyContent': 'flex-start','center','flex-end', 'space-between', 'space-around' => on start default 

// justifyContent is similar to alignItems, it just works in opposite direction

// 2) FLEX properties on CHILD

// As part of flex model, there are 2 main items assigned to child => 1) flex 2) alignSelf 

// assign flex = 1 for child 2 will make child 2 take up alll free space and much bigger
// flex=1 for child 1 , flex=1 for child 2 and flex=2 for child 3 will allocate 1/4th to c1, 1/4 to c2 and 1/2 to c3   
// alignSelf on child overrides alignItems property on parent
// alignSelf = 'flex-end', 'center', 'flex-start' 


// POSITION

// postion = 'relative' is default, Child will follow the rules set by parent
// postion = 'absolute' will overcome some of the rules set by parent


// TOP , BOTTOM, LEFT AND RIGHT 

// this may appear similar to margin. but the difference is that it is applied after screen is rendered
// top=10 on child 2 will push child2 down on top of child 3 and it will overlap. It wont move child3 down to accomodate child 2

// ONE CHILD FILL ENTIRE SCREEN
// set poistion of child2 as absolute and then set top, bottom, left and right to 0.
// we can achive the same using ...StyleSheet.absoluteFillObject also.


const BoxScreen = ()=>{
    return <View style={styles.viewStyle}>
        <Text style={styles.text1Style}>Child 1</Text>
        <Text style={styles.text2Style}>Child 2</Text>
        <Text style={styles.text3Style}>Child 3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor:'black',
        //alignItems:"center",
        //flexDirection:"row",
        //justifyContent:'center',
        height:200,
        //alignItems:"stretch" //=> default even if we dont set
        alignItems:"center"
    },
    text1Style:{
        borderWidth:3,
        borderColor:'red',
        //flex:3
        //margin:10
        
    },
    text2Style:{
        borderWidth:3,
        borderColor:'red',
        ...StyleSheet.absoluteFillObject
        //alignSelf:'center' // apply moving to center only to child 2
        //position:'absolute',
        //top:10
        //flex:1
        //margin:10
        
    },
    text3Style:{
        borderWidth:3,
        borderColor:'red',
        //flex:1
        //margin:10
        
    }
})

export default BoxScreen;