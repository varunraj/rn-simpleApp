import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter';



const SquareScreen = () =>{

    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    

    return(
        <View>
            <ColorCounter 
                color="Red" 
                setColor={setRed} 
                value={red}
            />
            <ColorCounter 
                color="Blue" 
                setColor={setBlue} 
                value={blue}
            />
            <ColorCounter 
                color="Green" 
                setColor={setGreen} 
                value={green}
            />
            <View style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}} />



        </View>
    )
}

const styles = StyleSheet.create({

})



export default SquareScreen;