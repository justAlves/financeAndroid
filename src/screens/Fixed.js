import React, {useContext} from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import FixedHeader from "../components/FixedHeader"
import { Context } from '../contexts/context';
import Icon from 'react-native-vector-icons/Ionicons'
import FixedPay from '../components/FixedPay';
import FixedModal from '../components/FixedModal';

export default props => {

    const { dark, user, balance, total, setFixedModal, fixedModal } = useContext(Context)

    return(
        <View style={[styles.container, {backgroundColor: dark ? '#333333' : '#EBEBEB'}]}>
            <FixedHeader name={user.name} value={total} out={balance.fixed}/>
            <View style={{flex: 1, maxHeight: 125}}>
                <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => setFixedModal(!fixedModal)} style={[styles.button, {backgroundColor: dark ? '#4A4443' : '#f2f2f2'}]}>
                            <Icon size={25} color={dark ? '#FFF' : '#000'} name="card-outline"/>
                        </TouchableOpacity>
                    <Text style={{color: dark ? '#FFF' : '#000'}}>Gastos Fixos</Text>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FixedPay keyExtractor={1}/>
            </View>
            <FixedModal/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 7,
        elevation: 15
    },
    buttonContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        height: 15
    }
  });
  