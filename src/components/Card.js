import React, {useContext} from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Context } from "../contexts/context";

export default props => {

    const { dark, eye, setEye, viewValue } = useContext(Context)

    return(
        <View style={[styles.container, {backgroundColor: dark ? "#4A4443" : "#FFF"}]}>
            <View style={styles.value}>
                <Text style={[styles.name, {color: dark ? '#FFF' : '#000'}]}>{props.name}</Text>
            </View>
            <View style={styles.value}>
                <Text style={[styles.name, {color: props.out ? "#D9415C" : "#3BDB58", display: eye ? 'none' : 'flex'}]}>{props.out ? "-R$" + props.value : "R$" + props.value}</Text>
                {viewValue(eye)}
                <Icon style={{display: eye ? 'none' : 'flex'}} color={props.out ? "#D9415C" : "#3BDB58"} size={20} name={props.out ? "arrow-alt-circle-down" : "arrow-alt-circle-up"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 300,
        height: 75,
        marginBottom: 15,
        borderRadius: 15,
        padding: 15,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    value:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})