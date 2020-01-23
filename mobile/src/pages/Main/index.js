import React, {useState, useEffect} from 'react'
import {View, Text, Alert} from 'react-native'
import api from '../../services/api'

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import List from '../../components/List'

export default function Main({navigation}){
    const [list, setList]=useState([])

    useEffect(()=>{
        async function loadList(){
            const response=await api.get('/list')
            setList(response.data)
        }
        loadList()
    },[])

    async function createList(){
        try {
            const response=await api.post(`/user/1/list`)
            setList([...list, response.data])
        } catch (error) {
            Alert.alert(`${error.response.data.error}`)
        } 
    }

    return(
        <View>
            <Header createList={createList}/>
            <SubHeader title="Shopping list" filterStatus={true}/>
            <List navigation={navigation} list={list}/>
        </View>
    )
}