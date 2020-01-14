import React from 'react'

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import List from '../../components/List'

import {Container} from './style'

const Main = () => {
    return (
        <Container>
            <Header/>
            <SubHeader/>
            <List/>
        </Container>
    )
}

export default Main
