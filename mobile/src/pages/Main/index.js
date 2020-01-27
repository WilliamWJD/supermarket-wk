import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import api from '../../services/api'

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import List from '../../components/List'

export default function Main({ navigation }) {
    const [list, setList] = useState([])

    useEffect(() => {
        async function loadList() {
            const response = await api.get('/list')
            setList(response.data)
        }
        loadList()
    }, [])

    async function save() {
        try {
            const response = await api.post(`/user/1/list`)
            setList([...list, response.data])
        } catch (error) {
            Alert.alert(`${error.response.data.error}`)
        }
    }

    async function createList() {
        Alert.alert(
            'Lista',
            'Deseja criar uma lista ?',
            [
                {
                    text: 'Não',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: () => { save() }
                },
            ],
            { cancelable: false },
        );

    }

    async function deleteList(idList) {
        // const response=await api.delete(`/list/${idList}`)
        // loadList()
        Alert.alert('teste')
    }

    function dialog(title,message,metod) {
        Alert.alert(
            `${title}`,
            `${message}`,
            [
                {
                    text: 'Não',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: () => { metod }
                },
            ],
            { cancelable: false },
        );
    }

    return (
        <View>
            <Header createList={createList} />
            <SubHeader title="Shopping list" filterStatus={true} />
            <List
                navigation={navigation}
                list={list}
                deleteList={deleteList}
                dialog={dialog}
            />
        </View>
    )
}