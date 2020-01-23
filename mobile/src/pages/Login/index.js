import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import FormLogin from '../../components/FormLogin'

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <FormLogin navigation={navigation}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    }
})