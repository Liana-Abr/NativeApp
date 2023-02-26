// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./pages/HomeScreen";
import AuthScreen from "./pages/AuthScreen";
import LoginScreen from "./pages/LoginScreen";
import LessonsScreen from "./pages/LessonsScreen";
import LessonScreen from "./pages/LessonScreen";
import {StatusBar} from "expo-status-bar";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./store";
import {Init, Login} from "./store/actions";
import {useEffect} from "react";


const Stack = createNativeStackNavigator();

//Если пользователь не вошел
const AuthStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}
//Если пользователь вошел
const MyStack =()=>{
    return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Главный экран"
                    component={LessonsScreen}
                />
                {/*<Stack.Screen name="Auth" component={AuthScreen} />*/}
                {/*<Stack.Screen name="Login" component={LoginScreen} />*/}
                {/*<Stack.Screen name="Lessons" component={LessonsScreen} />*/}
                {/*<Stack.Screen name="Lesson" component={LessonScreen} />*/}
            </Stack.Navigator>
    )

}
const RootNavigation = ()=> {
    const token = useSelector(state=> state.AuthReducers.authToken)
    console.log(token)

    const dispatch = useDispatch();
    const init = () => {
        dispatch(Init())
    }
    useEffect(() => {
        init()
    }, [])

    return (
        <NavigationContainer>
            {
                token === null ?
                    <AuthStack/> : <MyStack/>
            }
        </NavigationContainer>
    );
}

const App =() =>{
    return(
        <Provider  store={store}>
            <RootNavigation/>
        </Provider>

    )
}

export default App;