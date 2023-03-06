import React, {useContext} from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Context } from '../contexts/context'

const options = [
    1
]
    


export default props => {

    const { dark, setDark, setInModal, setOutModal, inModal, outModal } = useContext(Context)

    return(
        <View style={{flex: 1, maxHeight: 125}}>
            <FlatList 
                data={options} 
                keyExtractor={i => 1}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => 
                    <View style={styles.container}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => setInModal(!inModal)} style={[styles.button, {backgroundColor: dark ? '#4A4443' : '#f2f2f2'}]}>
                                <Icon size={25} color={dark ? '#FFF' : '#000'} name='arrow-alt-circle-up'/>
                            </TouchableOpacity>
                            <Text style={{color: dark ? '#FFF' : '#000'}}>Cadastrar Entrada</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => setOutModal(!outModal)} style={[styles.button, {backgroundColor: dark ? '#4A4443' : '#f2f2f2'}]}>
                                <Icon size={25} color={dark ? '#FFF' : '#000'} name='arrow-alt-circle-down'/>
                            </TouchableOpacity>
                            <Text style={{color: dark ? '#FFF' : '#000'}}>Cadastrar Saída</Text>
                        </View>
                    </View>} 
                horizontal/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 7,
        elevation: 15
    },
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        height: 50,
        flexDirection: 'row'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginHorizontal: 10
    }
})