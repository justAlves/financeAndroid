import React, { createContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import EncryptedStorage from 'react-native-encrypted-storage/'
import { setItem, getItem } from '../services/Storage'

export const Context = createContext({})

export default function ContextProvider({children}){

    const [dark, setDark] = useState(false)
    const [eye, setEye] = useState(false)
    const [inModal, setInModal] = useState(false)
    const [outModal, setOutModal] = useState(false)
    const [fixedModal, setFixedModal] = useState(false)
    const [items, setItems] = useState(getItem('InOut') || [])
    const [fixed, setFixed] = useState([])
    const [user, setUser] = useState({
        name: 'Alves',
        image: "https://i.pinimg.com/236x/d5/6e/ba/d56ebac0b50ca60b9664ac211c1b4434.jpg",
    })
    const [balance, setBalance] = useState({
        in: 0,
        out: 0,
        fixed: 0,
    })

    const total = parseFloat(balance.in + balance.out + balance.fixed)

    function viewValue(eye){
        if(eye){
            return(
                <View style={{backgroundColor: '#909090', height: 9, width: 75, marginBottom: 3}}></View>
            )
        }else{
            return null
        }
    }

    function addIn (name, price){
        const newData = {
            id: Math.random() * 1500 + items.length,
            name: name,
            price: parseFloat(price),
            out: false,
        }

        const money = parseFloat(price)
        const currentIn = balance.in

        setItems([...items, newData])
        setItem('InOut', [...items, newData])
        setBalance({...balance, in: currentIn + money})
    }

    function addOut (name, price){
        const newData = {
            id: Math.random() * 1500 + items.length,
            name: name,
            price: parseFloat(price),
            out: true,
        }

        const money = parseFloat(price)
        const currentOut = balance.out

        setItems([...items, newData])
        setBalance({...balance, out: currentOut - money})
    }

    function addFixed (name, price){
        const newFixed = {
            id: Math.random() * 1500 + fixed.length,
            name: name,
            price: parseFloat(price),
            out: true,
        }

        const money = parseFloat(price)
        const currentFixed = balance.out

        setFixed([...fixed, newFixed])
        setBalance({...balance, fixed: currentFixed - money})
    }

    return(
        <Context.Provider value={{dark, setDark, addIn, addOut,
        items, setItems, inModal, setInModal, eye, setEye, 
        viewValue, user, setUser, balance, setBalance, total,
        outModal, setOutModal, fixedModal, setFixedModal, addFixed, fixed, setFixed}}>
            {children}
        </Context.Provider>
    )
}