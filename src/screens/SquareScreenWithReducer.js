import React, { useReducer } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounterWithReducer';


// state is current state. action is the act performed on state to change it.
const reducer = (state,action)=>{
    // state === {red"number, green:number, blue:number}
    //action === {colorToChange : 'red'||'blue'||'green', amount: 15 || -15}

    switch(action.colorToChange){
        case 'Red':
            return {...state, Red:state.Red + action.amount} // duplicate state and update red                 
        case 'Green':
            return {...state, Green:state.Green + action.amount}
        case 'Blue' :
            return {...state, Blue:state.Blue + action.amount}
        default:
            return state;
    }

};


const SquareScreenWithReducer = () =>{

    //userReducer will take 2 params. One is a reducer function and 2nd contain all states
    const [state,dispatch] = useReducer(reducer, {Red:0, Green:0, Blue:0})
    
    //state object will contain all states
    
    console.log(state)

    return(
        <View>
            <ColorCounter 
                color="Red" 
                dispatch={dispatch} 
                value={state.Red}
            />
            <ColorCounter 
                color="Blue" 
                dispatch={dispatch} 
                value={state.Blue}
            />
            <ColorCounter 
                color="Green" 
                dispatch={dispatch} 
                value={state.Green}
            />
            <View style={{height:150, width:150, backgroundColor:`rgb(${state.Red},${state.Green},${state.Blue})`}} />



        </View>
    )
}

const styles = StyleSheet.create({

})



export default SquareScreenWithReducer;