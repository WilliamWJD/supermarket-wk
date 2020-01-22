import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import {MaterialIcons} from '@expo/vector-icons'

export default function SubHeader({title, filterStatus}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {filterStatus &&(
                <TouchableOpacity style={styles.IconFilter}>
                    <MaterialIcons name="filter-list" size={27} color="#7F8C8D"/>
                </TouchableOpacity>
            )}    
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:11,
    },

    title:{
        fontSize:21,
        fontWeight:'bold',
        color:'#7F8C8D'
    },

})