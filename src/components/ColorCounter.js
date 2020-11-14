import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const COLOR_INCREMENT = 20

const ColorCounter = ({color, setColor, value}) =>{

    
    return(
        <View>
            <Text>{color}</Text>
            <Button 
                title={`Increase ${color}`}
                onPress={()=>{setColor(value + COLOR_INCREMENT)}}
            />
            <Button 
                title={`Decrease ${color}`}
                onPress={()=>{setColor(value - COLOR_INCREMENT)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorCounter;