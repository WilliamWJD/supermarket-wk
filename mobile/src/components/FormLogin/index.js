import React from 'react'

import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'

import {MaterialIcons} from '@expo/vector-icons'

import Logo from '../../../assets/logo.png'

export default function FormLogin({navigation}){
    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>
            <View style={styles.form}>
                <View style={styles.formInputView}>
                    <MaterialIcons name="email" size={20} color={'#D2D8D8'} style={styles.inputIcon}/>
                    <TextInput 
                        placeholder="Digite seu melhor email..." 
                        style={styles.formInputViewText}
                        placeholderTextColor="#D2D8D8"
                    />
                </View>
                <View style={styles.formInputView}>
                    <MaterialIcons name="lock" size={20} color={'#D2D8D8'} style={styles.inputIcon}/>
                    <TextInput 
                        placeholder="Digite sua senha..." 
                        style={styles.formInputViewText}
                        placeholderTextColor="#D2D8D8"
                        
                    />
                </View>
                <TouchableOpacity style={styles.buttonLogin} onPress={()=>{}}>
                    <Text style={styles.buttonLoginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonIncreverse}>
                    <Text style={styles.buttonIncreverseText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    logo:{
        width:150,
        height:150,
        marginBottom:50
    },

    form:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },  

    formInputView:{
        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        borderRadius:10,
        paddingHorizontal:12,
        borderWidth:1,
        borderColor:"#D2D8D8"
    },

    inputIcon:{
        marginRight:12
    },

    formInputViewText:{
        flex:1,
        height:50,
        color:'#7F8C8D',
        fontSize:15
    },

    buttonLogin:{
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#27AE60',
        height:50,
        borderRadius:10
    },

    buttonLoginText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'
    },

    buttonIncreverse:{
        width:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },

    buttonIncreverseText:{
        fontSize:15,
        color:'#27AE60',
    }

})