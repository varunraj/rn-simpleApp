import React from 'react'
import {Text, StyleSheet, FlatList} from 'react-native'


const friends = [
    {name:"Friend 1", age: 20},
    {name:"Friend 2", age: 45},
    {name:"Friend 3", age: 8},
    {name:"Friend 4", age: 40},
    {name:"Friend 5", age: 54},
    {name:"Friend 6", age: 22},
    {name:"Friend 7", age: 17}
]


const ListScreen1 = ()=>{

    return (
        <FlatList
            keyExtractor={(friend)=> friend.name}
            data={friends}
            renderItem={({item})=>{
                return(
                <Text style={styles.textFont}> 
                    {item.name} - Age {item.age}
                </Text>
                )
            }}        
        >
        </FlatList>
    )
}


const styles = StyleSheet.create({
    textFont:{
        fontSize:20,
        marginVertical:20
    }
})


export default ListScreen1;