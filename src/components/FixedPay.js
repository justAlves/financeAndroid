import React, {useContext} from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { Context } from "../contexts/context";

import Card from './Card'

export default props => {
    const { dark, setDark, fixed } = useContext(Context)

    return(
        <View style={{flex: 1,  alignItems: "center"}}>
            <FlatList 
            data={fixed} 
            showsVerticalScrollIndicator={false}
            keyExtractor={i => i.id} 
            renderItem={({item}) => 
                <Card eye={props.eye} name={item.name} value={item.price} out={true}/>
            }/>
        </View>
    )
}