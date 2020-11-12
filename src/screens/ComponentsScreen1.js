import React from 'react'
import {Text, StyleSheet, View} from 'react-native'


const ComponentsScreen1 = ()=>{


    const name = "Varun Raj"

    return(
            <View>
            <Text style={styles.headingFont}>Getting Started with React Native</Text>
            <Text style={styles.contentFont}>My name is {name}</Text>
        </View>
        )



}

const styles = StyleSheet.create({
    headingFont:{
        fontSize:45
    },
    contentFont:{
        fontSize:20
    }

})




export default ComponentsScreen1;