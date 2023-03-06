import {View, StyleSheet, Text, Image, Switch } from 'react-native'
import {useContext} from 'react'
import { Context } from '../contexts/context'


export default props => {
    const { dark, setDark, user } = useContext(Context)

    return(
        <View style={[styles.container, {backgroundColor: dark ? '#333333' : '#f2f2f2'}]}>
            <View style={[styles.user, {backgroundColor: dark ? '#4A4443' : '#fafafa'}]}>
                <Image style={styles.image} source={{uri: user.image}}/>
                <Text style={[styles.name, {color: dark ? "#fff" : "#000"}]}>{user.name}</Text>
            </View>
            <View style={[styles.miniContainer, {backgroundColor: dark ? '#4A4443' : '#fafafa'}]}>
                <Text style={[styles.option, {color: dark ? '#fff' : '#000'}]}>Tema escuro</Text>
                <Switch value={dark}
                trackColor={{true: '#be95c4'}}
                thumbColor={dark ? "#5e548e" : "#f2f2f2"}
                onValueChange={() => setDark(!dark)}
                />
            </View>
            <View style={[styles.miniContainer, {backgroundColor: dark ? '#4A4443' : '#fafafa'}]}>
                <Text style={[styles.option, {color: dark ? '#fff' : '#000'}]}>Esquema de cores</Text>
            </View>
            <View style={[styles.miniContainer, {backgroundColor: dark ? '#4A4443' : '#fafafa'}]}>
                <Text style={[styles.option, {color: dark ? '#fff' : '#000'}]}>Idioma</Text>
            </View>
            <View style={[styles.miniContainer, {backgroundColor: dark ? '#4A4443' : '#fafafa'}]}>
                <Text style={[styles.option, {color: dark ? '#fff' : '#000'}]}>Moeda</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 75,
        borderWidth: 1,
        borderColor: '#000',
    },
    user:{
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 30,
        borderRadius: 20,
        elevation: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 15,
    },
    miniContainer: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 30,
        borderRadius: 20,
        elevation: 10
    },
    option: {
        fontWeight: 'bold',
        fontSize: 15,
    }
})