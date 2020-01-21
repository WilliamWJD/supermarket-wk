import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import Perfil from '../../../assets/perfil.jpg'

export default function List(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxList}>
                <View style={styles.boxListStatus}></View>
                <View style={styles.boxListConteudo}>
                    <View style={styles.boxListDescription}>
                        <View style={styles.boxListDescriptionItem}>
                            <MaterialIcons name="date-range" size={20} color="#7F8C8D"/>
                            <Text style={styles.boxListDescriptionText}>Data: 03/12/2019</Text>
                        </View>
                        <View style={styles.boxListDescriptionItem}>
                            <MaterialIcons name="shopping-cart" size={20} color="#7F8C8D"/>
                            <Text style={styles.boxListDescriptionText}>Carrinho: 3/7</Text>
                        </View>
                        
                        {/* <Text style={styles.boxListDescriptionText}>Carrinho:  3/7</Text> */}
                    </View>
                    <Image source={Perfil} style={styles.boxListImageUser}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxList}>
                <View style={styles.boxListStatus}></View>
                <View style={styles.boxListConteudo}>
                    <View style={styles.boxListDescription}>
                        <View style={styles.boxListDescriptionItem}>
                            <MaterialIcons name="date-range" size={20} color="#7F8C8D"/>
                            <Text style={styles.boxListDescriptionText}>Data: 03/12/2019</Text>
                        </View>
                        <View style={styles.boxListDescriptionItem}>
                            <MaterialIcons name="shopping-cart" size={20} color="#7F8C8D"/>
                            <Text style={styles.boxListDescriptionText}>Carrinho: 3/7</Text>
                        </View>
                        
                        {/* <Text style={styles.boxListDescriptionText}>Carrinho:  3/7</Text> */}
                    </View>
                    <Image source={Perfil} style={styles.boxListImageUser}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxList}>
                <View style={styles.boxListStatus}></View>
                <View style={styles.boxListConteudo}>
                    <View style={styles.boxListDescription}>
                        <View style={styles.boxListDescriptionItem}>
                            <MaterialIcons name="date-range" size={20} color="#7F8C8D"/>
                            <Text style={styles.boxListDescriptionText}>Data: 03/12/2019</Text>
                        </View>
                        <View style={styles.boxListDescriptionItem}>
                            <MaterialIcons name="shopping-cart" size={20} color="#7F8C8D"/>
                            <Text style={styles.boxListDescriptionText}>Carrinho: 3/7</Text>
                        </View>
                        
                        {/* <Text style={styles.boxListDescriptionText}>Carrinho:  3/7</Text> */}
                    </View>
                    <Image source={Perfil} style={styles.boxListImageUser}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:11
    },

    boxList:{
        flexDirection:'row',
        backgroundColor:'#ECF0F1',
        height:75,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        marginBottom:10
    },

    boxListStatus:{
        backgroundColor:'#E74C3C',
        width:20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10
    },

    boxListConteudo:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },

    boxListDescriptionItem:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3
    },

    boxListDescriptionText:{
        fontSize:17,
        color:'#7F8C8D',
        marginLeft:7
    },

    boxListImageUser:{
        width:45,
        height:45,
        borderRadius:22.5,
        borderWidth:2,
        borderColor:'#fff'
    }  
})