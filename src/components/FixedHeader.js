import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Context } from "../contexts/context";

export default props => {

    const { dark, eye, setEye, viewValue } = useContext(Context)

    return(
        <> 
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.main}>Olá, {props.name}</Text>
                     <TouchableOpacity onPress={() => setEye(!eye)}>
                        {eye ? <Icon color="#f8f8f8" size={20} name={"eye-slash"}/> : <Icon color="#f8f8f8" size={20} name={"eye"}/>}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.valueContainer, {backgroundColor: dark ? '#4A4443' : '#FFF'}]}>
                <View style={styles.balanceContainer}>
                    <Text style={[styles.value, {color: dark ? '#fff' : '#000'}]}>Saldo: </Text>
                    {viewValue(eye)}
                    <Text style={[styles.value2, {display: eye ? "none" : "flex", color: props.value < 0 ? "#D9415C" : "#3BDB58"}]}>R${props.value}</Text>
                </View>
                <View style={styles.inOut}>
                    <Icon color="#D9415C" size={40} name="credit-card" />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={[styles.outText, {display: eye ? "none" : "flex"}]}>R${props.out}</Text>
                    {viewValue(eye)}
                </View>
            </View>
        </>  
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#be95c4",
        width: "100%",
        height: 220,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 25,
        elevation: 10
    },
    content: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    main: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#f2f2f2"
    },
    valueContainer: {
        width: "85%",
        height: 250,
        marginTop: -120,
        borderRadius: 30,
        padding: 30,
        elevation: 25
    },
    value: {
        fontWeight: "bold",
        fontSize: 20,
    },
    value2: {
        fontSize: 20,
    },
    balanceContainer:{
        flexDirection: "row",
        alignItems: 'center'
    },
    inOut: {
        marginTop: 35,
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 35
    },
    outText: {
        fontSize: 20,
        color: "#D9415C",
    }
})