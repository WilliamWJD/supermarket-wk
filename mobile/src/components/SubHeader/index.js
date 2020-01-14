import React from 'react'
import { Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container, Title, Filter} from './styles'

const SubHeader = () => {
    return (
        <Container>
            <Title>Shopping list</Title>
            <Filter>
                <Icon name="filter-list" size={30} color="#7F8C8D"/>
            </Filter>
        </Container>
    )
}

export default SubHeader
