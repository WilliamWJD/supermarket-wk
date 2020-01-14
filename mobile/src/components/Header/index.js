import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Profile from '../../assets/profile.jpg'

import {Container, Perfil, FilterMonth, AddButton, TextFilter} from './styles'

const Header = () => {
    return (
        <Container>
           <Perfil source={Profile}/>
           <FilterMonth>
               <TextFilter placeholder="Selecione o mês"/>
               <Icon name="date-range" size={25} color="#D2D8D8"/>
           </FilterMonth>
           <AddButton>
               <Icon name="add" size={25} color="#fff"/>
           </AddButton>
        </Container>
    )
}

export default Header
