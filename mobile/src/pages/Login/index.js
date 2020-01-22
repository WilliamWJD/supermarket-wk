import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import FormLogin from '../../components/FormLogin'

export default function Login(){
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <FormLogin/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    }
})