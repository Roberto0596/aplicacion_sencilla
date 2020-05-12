import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import UserList from './src/screens/UserList'
import UserDetails from './src/screens/UserDetails'

const AppNavigator = createStackNavigator(
{
    UserList: 
    {
        screen: UserList
    },
    UserDetails:
    {
        screen: UserDetails
    }
});

export default createAppContainer(AppNavigator);