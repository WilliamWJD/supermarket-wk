import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main'
import Detail from './pages/Detail'

const Routes=createAppContainer(
    createSwitchNavigator({
        Main,
        Detail
    },{
        initialRouteName:'Main',
        backBehavior:'order'
    })
)

export default Routes