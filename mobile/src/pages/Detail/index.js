import React from 'react'

import {View, Text} from 'react-native'

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import DetailList from '../../components/DetailList'

export default function Detail(){
    return(
        <View>
            <Header disableFilter={true}/>
            <DetailList/>
        </View>
    )
}