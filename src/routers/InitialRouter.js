import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginRegisterRoutes from './LoginRegisterRoutes'
import MainMenuApp from './MainMenuApp'
import {connect} from 'react-redux'

const InitialRouter = (props) => {

    const renderMenu = () => {
        if(props.dataUser){
            return <MainMenuApp /> // bottomtab
        }else{
            return <LoginRegisterRoutes />
        }
    }

    return (
        <NavigationContainer>
           {renderMenu()}
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        dataUser : state.user
    }
}

export default connect(mapStateToProps)(InitialRouter);
