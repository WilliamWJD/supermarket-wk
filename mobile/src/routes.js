import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main'
import Detail from './pages/Detail'
import Login from './pages/Login'

const Routes=createAppContainer(
    createSwitchNavigator({
        Main,
        Detail,
        Login
    },{
        initialRouteName:'Login',
        backBehavior:'order'
    })
)

export default Routes