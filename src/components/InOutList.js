import React, { useContext, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { Context } from "../contexts/context";

import Card from './Card'

export default props => {
    const { dark, setDark, items } = useContext(Context)

    return(
        <View style={{flex: 1, alignItems: 'center'}}>
            <FlatList 
            data={items} 
            showsVerticalScrollIndicator={false}
            keyExtractor={i => i.id} 
            renderItem={(items) => 
                <Card eye={props.eye} name={items.item.name} value={items.item.price} out={items.item.out}/>
            }/>
        </View>
    )
}

