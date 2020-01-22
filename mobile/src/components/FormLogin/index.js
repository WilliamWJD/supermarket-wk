import React from 'react'

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default function FormLogin(){
    return(
        <View style={styles.container}>
            <TextInput placeholder="Digite seu melhor email..."/>
            <TextInput placeholder="Digite sua senha..."/>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({

})