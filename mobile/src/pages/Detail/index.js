import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Header from '../../components/Header'
// import SubHeader from '../../components/SubHeader'
import DetailList from '../../components/DetailList'

export default function Detail(){
    return(
        <View style={styles.container}>
            <Header disableFilter={true}/>
            <DetailList/>
            <TouchableOpacity style={styles.buttonCheckout}>
                <Text style={styles.buttonCheckoutText}>Check out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        // backgroundColor:'blue'
    },

    buttonCheckout:{
        width:'100%',
        height:45,
        borderWidth:2,
        borderColor:'#27AE60',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonCheckoutText:{
        fontSize:17,
        color:'#27AE60',
       
    }
})