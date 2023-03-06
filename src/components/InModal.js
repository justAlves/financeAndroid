import { Modal, View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { useContext, useState } from 'react'
import { Context } from "../contexts/context"

export default props => {

    const { dark, addIn, inModal, setInModal } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')


    return(
        <Modal
            animationType='slide'
            visible={inModal}
            transparent
            onRequestClose={() => setInModal(!inModal)}>
                <View style={styles.container}>
                    <View style={[styles.modal, {backgroundColor: dark ? '#4A4443' : '#fff', }]}>
                        <View style={styles.header}>
                            <Text style={[styles.title, {color: dark ? '#fff' : '#000'}]}>Cadastrar Entrada</Text>
                        </View>
                        <View>
                            <TextInput value={name} onChangeText={n => setName(n)} placeholderTextColor={dark ? '#a2a2a2' : '#000'} style={[styles.input, { borderColor: dark ? '#000' : '#a2a2a2', color: dark ? '#fff' : '#000'}]} placeholder="Informe a descrição..."/>
                            <TextInput value={price} onChangeText={p => setPrice(p)} placeholderTextColor={dark ? '#a2a2a2' : '#000'} style={[styles.input, { borderColor: dark ? '#000' : '#a2a2a2', color: dark ? '#fff' : '#000'}]} keyboardType="number-pad" placeholder="Informe o valor..."/>
                            <TouchableOpacity onPress={() => {
                                addIn(name, price)
                                setInModal(!inModal)
                                setName('')
                                setPrice('')
                                }} style={styles.button}>
                                <Text style={styles.textButton}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: 325,
        width: '90%',
        borderRadius: 35,
    },
    header: {
        height: '20%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333333'
    },
    input: {
        borderWidth: 1,
        margin: 25,
        marginBottom: 1,
        padding: 10,
        borderRadius: 50,
    },
    button: {
        backgroundColor: '#F52929',
        margin: 30,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
    }
})