import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import Profile from '../../assets/profile.jpg'

import {Container, Perfil, FilterMonth, AddButton, TextFilter} from './styles'

const Header = () => {
    return (
        <Container>
           <Perfil source={Profile}/>
           <FilterMonth>
               <TextFilter placeholder="Selecione o mês"/>
           </FilterMonth>
           <AddButton>
               <Text>+</Text>
           </AddButton>
        </Container>
    )
}

export default Header
