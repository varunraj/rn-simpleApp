import React from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'

/*
Flat List Element from React NativeAppEventEmitter

 - Turns an array into list of objects
 - We need to pass a prop of data - array that contains data
 - pass 'renderItem' prop - function that will turn each item to element

*/

const ListScreen = ()=>{

    const friends = [
        {name:"Friend#1"},
        {name:"Friend#2"},
        {name:"Friend#3"},
        {name:"Friend#4"},
        {name:"Friend#5"},
        {name:"Friend#6"},
        {name:"Friend#7"}
    ]

    //showsHorizontalScrollIndicator = {false}

    return(
        <View>
            <FlatList
                // below prop says list should be show as horizontal
                horizontal={true}
                // below code will hide scroll bar
                showsHorizontalScrollIndicator = {false}
                // below function assign a key to list item
                keyExtractor={(friend)=>friend.name}
                data={friends} 
                //element passed to renderItem === {item: {name:'Friend#1'}, index:0}
                renderItem={({item})=>{
                    return (
                        <Text style={styles.textStyle}>{item.name}</Text>
                    )
                }}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 20,
        fontSize:20
        
    }
})

export default ListScreen;