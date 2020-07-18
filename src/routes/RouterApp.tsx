import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { IndexScreen } from './../../src/screens/IndexScreen'
import { GameScreen } from './../../src/screens/GameScreen'


export const RouterApp = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="game" component={GameScreen} hideNavBar={true} />
                <Scene key="home" component={IndexScreen} hideNavBar={true} initial={true} />
            </Scene>
        </Router>
    )
}
