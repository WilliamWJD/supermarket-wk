import React, { useState } from 'react'

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'

import { CheckBox } from 'react-native-elements'

export default function DetailList() {
    const [check, setCheck]=useState(false)

    function carrinho(){
        if(check){
            setCheck(false)
        }else{
            setCheck(true)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.detail}>
                <View style={styles.cartFalse}>
                    <Text style={styles.cartTitle}>Detail list</Text>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>1x</Text>
                        <Text style={styles.cartItemDescription}>Margarina</Text>
                        {/* <CheckBox
                            checked={check}
                            checkedColor={'#27AE60'}
                            onPress={()=>{carrinho()}}
                        /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>1x</Text>
                        <Text style={styles.cartItemDescription}>Salgadinho Doritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>1x</Text>
                        <Text style={styles.cartItemDescription}>Pote de Sorvete</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.cartTrue}>
                    <Text style={styles.cartTitle}>Cart of shopping</Text>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>1x</Text>
                        <Text style={styles.cartItemDescription}>Luva para lavar louça</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>1x</Text>
                        <Text style={styles.cartItemDescription}>Cerveja Corona</Text>
                    </TouchableOpacity>
                </View>
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

    cartFalse: {
        flex: 1,
    },

    cartTrue: {
        flex: 1,
        marginTop: 20
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
        color: '#7F8C8D'
    },


})