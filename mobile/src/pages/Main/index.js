import React from 'react'

import {View, Text} from 'react-native'

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import List from '../../components/List'

export default function Main({navigation}){
    return(
        <View>
            <Header/>
            <SubHeader/>
            <List navigation={navigation}/>
        </View>
    )
}