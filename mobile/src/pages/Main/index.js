import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'

import {Container} from './style'

const Main = () => {
    return (
        <Container>
            <Header/>
            <SubHeader/>
        </Container>
    )
}

export default Main
