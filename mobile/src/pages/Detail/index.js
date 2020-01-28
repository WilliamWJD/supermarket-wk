import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Header from '../../components/Header'
import DetailList from '../../components/DetailList'

import api from '../../services/api'

export default function Detail({ navigation }) {

    const idList = navigation.getParam('lista')

    async function onCheckinList() {
        const response = await api.put(`/list/${idList}`, {
            status: true
        })
        if (response.data) {
            navigation.navigate('Main')
        }
    }

    return (
        <View style={styles.container}>
            <Header disableFilter={true} />
            <DetailList navigation={navigation} />
            <TouchableOpacity style={styles.buttonCheckout} onPress={onCheckinList}>
                <Text style={styles.buttonCheckoutText}>Check out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        // backgroundColor:'blue'
    },

    buttonCheckout: {
        width: '100%',
        height: 45,
        borderWidth: 2,
        borderColor: '#27AE60',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonCheckoutText: {
        fontSize: 17,
        color: '#27AE60',
    }
})