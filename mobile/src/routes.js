import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main'

const Routes=createAppContainer(
    createSwitchNavigator({
        Main,
    },{
        initialRouteName:'Main',
        backBehavior:'history'
    })
)

export default Routes