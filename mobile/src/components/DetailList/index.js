import React from 'react'

import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

export default function DetailList(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.detail}>
                <View style={styles.cartFalse}>
                    <Text style={styles.cartTitle}>Detail list</Text>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>Margarina</Text>
                        <Text style={styles.cartItemDescription}>1x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>Margarina</Text>
                        <Text style={styles.cartItemDescription}>1x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>Margarina</Text>
                        <Text style={styles.cartItemDescription}>1x</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cartTrue}>
                    <Text style={styles.cartTitle}>Cart of shopping</Text>
                    <TouchableOpacity style={styles.cartItem}>
                        <Text style={styles.cartItemDescription}>Margarina</Text>
                        <Text style={styles.cartItemDescription}>1x</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonCheckout}>
                <Text style={styles.buttonCheckoutText}>Check out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:20,
    },

    cartFalse:{
        flex:1,
    },

    cartTrue:{
        flex:1,
        marginTop:10
    },

    cartTitle:{
        fontSize:21,
        fontWeight:'bold',
        color:'#7F8C8D'
    },

    cartItem:{
        // backgroundColor:'red',
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30
    },

    cartItemDescription:{
        fontSize:18,
        color:'#7F8C8D'
    },

    buttonCheckout:{
        width:'100%',
        height:45,
        borderWidth:2,
        borderColor:'#27AE60',
        borderRadius:10,
        // paddingHorizontal:10,
        // paddingVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonCheckoutText:{
        fontSize:17,
        color:'#27AE60'
    }
})