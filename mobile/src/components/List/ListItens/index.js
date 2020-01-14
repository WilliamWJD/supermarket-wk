import React from 'react'
import { Text } from 'react-native'

import Profile from '../../../assets/profile.jpg'

import { BoxList, BoxConteudo, BoxListStatus, BoxListTexts, BoxListTextsData, BoxListTextsCar, BoxListImageUser } from './style'

const ListItem = () => {
    return (
        <BoxList>
            <BoxListStatus />
            <BoxConteudo>
                <BoxListTexts>
                    <BoxListTextsData>Data: 14/01/2020</BoxListTextsData>
                    <BoxListTextsCar>Carrinho: 3/7</BoxListTextsCar>
                </BoxListTexts>
                <BoxListImageUser
                    source={Profile}
                />
            </BoxConteudo>
        </BoxList>
    )
}

export default ListItem
