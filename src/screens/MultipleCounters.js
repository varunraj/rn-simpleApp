import React, {useState} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import CounterScreen from './CounterScreen';

const MultipleCounters = ()=> {
    
    const [counter,setCounter] = useState(0);
    
    return (
        <View>
            <CounterScreen/>
            <CounterScreen/>
        </View>
    )

}

const style = StyleSheet.create({

});

export default MultipleCounters

