import React from 'react'

import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'

import {MaterialIcons} from '@expo/vector-icons'

import Perfil from '../../../assets/perfil.jpg'

export default function Header(){
    return(
        <View style={styles.container}>
            <Image source={Perfil} style={styles.imagePerfil}/>
            <TouchableOpacity style={styles.searchMonth}>
                <Text style={styles.searchMonthText}>Selecione o mês</Text>
                <MaterialIcons name="date-range" size={23} color="#D2D8D8"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAdd}>
               <MaterialIcons name="add" size={23} color="#fff"/>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        alignItems:'center'
    },

    imagePerfil:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'#D2D8D8',
        marginRight:10,
    },

    searchMonth:{
        flexDirection:'row',
        flex:2,
        height:35,
        borderWidth:2,
        borderColor:"#D2D8D8",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:7
    },

    searchMonthText:{
        color:'#D2D8D8',
        fontSize:16,
    },

    buttonAdd:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#27AE60',
        paddingHorizontal:15,
        borderRadius:8,
        marginLeft:10,
        height:35
    }
})