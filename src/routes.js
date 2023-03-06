import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useContext } from 'react'
import { Context } from './contexts/context'
import Home from './screens/Home'
import Settings from './screens/Settings'
import Icon from 'react-native-vector-icons/Ionicons'
import Fixed from './screens/Fixed'

const Tab = createBottomTabNavigator()

export default props => {

    const { dark, setDark } = useContext(Context)

    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: dark === true ? '#4A4443' : '#fff',
              borderTopWidth: 0,
            }
          }}>
            <Tab.Screen options={{
              tabBarIcon: ({size, focused}) => {
                if(focused){
                  return <Icon name="wallet" size={size} color="#be95c4"/>
                }
  
                return <Icon name="wallet-outline" size={size} color="#be95c4"/>
              }
            }} name="Home" component={Home}/>
            <Tab.Screen options={{
              tabBarIcon: ({size, focused}) => {
                if(focused){
                  return <Icon name="card" size={size} color="#be95c4"/>
                }
  
                return <Icon name="card-outline" size={size} color="#be95c4"/>
              }
            }} name="Fixed" component={Fixed}/>
            <Tab.Screen options={{
              tabBarIcon: ({size, focused}) => {
                if(focused){
                  return <Icon name="settings" size={size} color="#be95c4"/>
                }
  
                return <Icon name="settings-outline" size={size} color="#be95c4"/>
              }
            }} name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}