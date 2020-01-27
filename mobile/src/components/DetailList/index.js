import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'

import api from '../../services/api'

export default function DetailList({ navigation }) {
    const [detail, setDetail] = useState([])
    
    const idList = navigation.getParam('lista')
    
    useEffect(() => {
        async function loadDetail() {
            const response = await api.get(`/user/1/list/${idList}/detail`)
            setDetail(response.data)
        }
        loadDetail()
    }, [])

    async function onMarkedCar(item){
        const response=await api.put(`/user/1/list/${idList}/detail/${item.id}`,{
            description:item.description,
            quantity:item.quantity,
            status:true
        })
        Alert.alert('Item adicionado no carrinho')
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.detail}>
                <Text style={styles.cartTitle}>Detail list</Text>
                {detail.map(item => (
                    <TouchableOpacity 
                        style={styles.cartItem} 
                        key={item.id}
                        onLongPress={()=>{onMarkedCar(item)}}
                    >
                        <Text style={item.status ? styles.cartItemDescriptionTrue : styles.cartItemDescription}>{item.description}</Text>
                        <Text style={item.status ? styles.cartItemDescriptionTrue : styles.cartItemDescription}>1x</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginTop: 20,
        marginBottom: 20
        // backgroundColor:'red',
    },

    cartTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#7F8C8D'
    },

    cartItem: {
        // backgroundColor:'red',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30
    },

    cartItemDescription: {
        fontSize: 18,
        color: '#7F8C8D',
    },

    cartItemDescriptionTrue:{
        fontSize: 18,
        color: '#ddd',
        textDecorationLine:"line-through",
    }


})