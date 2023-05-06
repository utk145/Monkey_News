import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import Utk from "../Components/Home/Utk";
import Home from "../Pages/Home";
import ReadNews from "../Pages/ReadNews";


const Stack = createStackNavigator();

// https://reactnavigation.org/docs/stack-navigator/

// This is just for the routing purpose 
const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Reader" component={ReadNews}/>
        <Stack.Screen name="Utk" component={Utk}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator


// Whatever is defined first inside the Stack.Navigator will be treated as the default screen 