import React, {useContext} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Actions from '../components/Actions';
import InOutList from '../components/InOutList';
import InModal from '../components/InModal';
import OutModal from '../components/OutModal';
import { Context } from '../contexts/context'

export default props => {

  const { dark, user, inModal, setInModal, balance, total } = useContext(Context)



  const items = [1]

  return (
    <View style={[styles.container, {backgroundColor: dark ? '#333333' : '#EBEBEB'}]}>
      <Header name={user.name} value={total} in={balance.in} out={balance.out}/>
      <Actions/>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <InOutList keyExtractor={1}/>
      </View>
      <InModal transparent={true}/>
      <OutModal transparent={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
