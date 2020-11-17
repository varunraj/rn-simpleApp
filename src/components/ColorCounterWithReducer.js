import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const COLOR_INCREMENT = 20

const ColorCounter = ({color, dispatch, value}) =>{

    
    return(
        <View>
            <Text>{color}</Text>
            <Button 
                title={`Increase ${color}`}
                onPress={()=>{
                    if (value + COLOR_INCREMENT < 255)
                        dispatch({type:`change_${color}`, payload:COLOR_INCREMENT})
                    }
                }
            />
            <Button 
                title={`Decrease ${color}`}
                onPress={()=>{
                    if (value - COLOR_INCREMENT > 0) // dont set negative value
                       dispatch({type:`change_${color}`, payload:-COLOR_INCREMENT})
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorCounter;