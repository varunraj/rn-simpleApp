import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'



const TextScreen = ()=>{

    const [name, setName] = useState('');

    return <View>
        <TextInput
            autoCapitalize="none" // dont auto capitalize
            autoCorrect={false} //dont do spell check 
            value={name}
            onChangeText={(newValue)=>{setName(newValue)}}
            style={styles.input} />
        <Text>My name is {name}</Text>
        { (name.length < 3) ? <Text>Name is too short !</Text>: null }
    </View>
}



const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
});


export default TextScreen;