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


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Главный экран"
                    component={HomeScreen}
                />
                <Stack.Screen name="Auth" component={AuthScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Lessons" component={LessonsScreen} />
                <Stack.Screen name="Lesson" component={LessonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;