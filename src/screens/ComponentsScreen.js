import React from 'react';
// view is used to group elements
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {

    const greeting = "bye there.."
    const newElement = <Text>Hi there Again!!!</Text>
    // we can also directly add style into jsx without creating using Stylesheet
    return(
        <View>
            <Text style={styles.textStyle}>This is the components Screen</Text>
            <Text>{greeting}</Text>
            {newElement}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})

export default ComponentsScreen;

