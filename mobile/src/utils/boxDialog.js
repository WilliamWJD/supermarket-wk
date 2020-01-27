import React from 'react'

import {Alert} from 'react-native'

export default function BoxDialog({title, message, metod}){
    Alert.alert(
        {title},
        {message},
        [
            {
                text: 'Não',
                onPress: () => {},
                style: 'cancel',
            },
            {
                text: 'Sim', 
                onPress: () => {metod}
            },
        ],
        { cancelable: false },
    );
}