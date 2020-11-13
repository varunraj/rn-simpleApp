import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";



const HomeScreen = (props) => {
  
  //console.log(props.navigation);

  return(
    <View>
        <Text style={styles.text}>Hello World!!!</Text>
        <Button 
          title="Go to Components"
          onPress={( )=>{
            //console.log("Button Pressed")
            props.navigation.navigate('Components') // string passed is same as from home screen route names        
          }}
        />

        <Button 
          title="Go to List"
          onPress={( )=>{
            //console.log("Button Pressed")
            props.navigation.navigate('List1') // string passed is same as from home screen route names        
          }}
        />

        <Button 
          title="Go to Images"
          onPress={( )=>{
            //console.log("Button Pressed")
            props.navigation.navigate('Image') // string passed is same as from home screen route names        
          }}
        />
        
        <Button 
          title="Go to Counter"
          onPress={( )=>{
            //console.log("Button Pressed")
            props.navigation.navigate('Counter') // string passed is same as from home screen route names        
          }}
        />

                
        <Button 
          title="Go to Multiple Counters"
          onPress={( )=>{
            //console.log("Button Pressed")
            props.navigation.navigate('MultipleCounters') // string passed is same as from home screen route names        
          }}
        />

      <Button 
          title="Go to Color Demo"
          onPress={( )=>{
            //console.log("Button Pressed")
            props.navigation.navigate('Color') // string passed is same as from home screen route names        
          }}
        />

        <TouchableOpacity   // Advance features than simple button !
          onPress={()=> props.navigation.navigate('List')}
        >
            <Text>Go to List</Text>  
        </TouchableOpacity>
    </View>
  )
  };

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

