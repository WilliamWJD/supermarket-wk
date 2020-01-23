import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, FlatList, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Perfil from '../../../assets/perfil.jpg'

import ListItem from './ListItem'

export default function List({ navigation, list }) {
    const [offset] = useState(new Animated.Value(250))

    useEffect(() => {
        Animated.spring(offset, {
            toValue: 0,
            speed: 5,
            bounciness: 20
        }).start()
    }, [])

    return (
        <Animated.View style={[styles.container, {
            transform: [
                { translateX: offset }
            ]
        }]}>        
            {list.map(item => (
                <TouchableOpacity 
                    key={item.id}
                    style={styles.boxList} 
                    onPress={() => { navigation.navigate('Detail') }}
                >
                    <View style={styles.boxListStatus}></View>
                    <View style={styles.boxListConteudo}>
                        <View style={styles.boxListDescription}>
                            <View style={styles.boxListDescriptionItem}>
                                <MaterialIcons name="date-range" size={20} color="#7F8C8D" />
                                <Text style={styles.boxListDescriptionText}>{item.createdAt}</Text>
                            </View>
                            <View style={styles.boxListDescriptionItem}>
                                <MaterialIcons name="shopping-cart" size={20} color="#7F8C8D" />
                                <Text style={styles.boxListDescriptionText}>Carrinho: 3/7</Text>
                            </View>
                        </View>
                        <Image source={Perfil} style={styles.boxListImageUser} />
                    </View>
                </TouchableOpacity>
            ))}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 11
    },

    boxList: {
        flexDirection: 'row',
        backgroundColor: '#ECF0F1',
        height: 75,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 10
    },

    boxListStatus: {
        backgroundColor: '#E74C3C',
        width: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    boxListConteudo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    boxListDescriptionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3
    },

    boxListDescriptionText: {
        fontSize: 17,
        color: '#7F8C8D',
        marginLeft: 7
    },

    boxListImageUser: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        borderWidth: 2,
        borderColor: '#fff'
    }
})