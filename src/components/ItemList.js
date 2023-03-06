import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";

import Card from './Card'

const items = [
    {
        id: 1,
        name: 'Pix',
        value: 200,
        out: false
    },
    {
        id: 2,
        name: 'Lanche',
        value: 10,
        out: true
    },
    {
        id: 3,
        name: 'Pix',
        value: 200,
        out: false
    },
    {
        id: 4,
        name: 'Lanche',
        value: 10,
        out: true
    },
    {
        id: 5,
        name: 'Pix',
        value: 200,
        out: false
    },
    {
        id: 6,
        name: 'Lanche',
        value: 10,
        out: true
    },
]

export default props => {
    return(
        <View style={{flex: 1}}>
            <FlatList 
            data={items} 
            showsVerticalScrollIndicator={false}
            keyExtractor={i => i.id} 
            renderItem={({item}) => 
                <Card eye={props.eye} name={item.name} value={item.value} out={item.out}/>
            }/>
        </View>
    )
}

