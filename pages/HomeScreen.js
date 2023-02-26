import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as React from "react";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Добро пожаловать на платформу для обучения!</Text>
            {/*<Button*/}
            {/*    title="Зарегестрироваться"*/}
            {/*    onPress={() =>*/}
            {/*        navigation.navigate('Auth')*/}
            {/*    }*/}
            {/*/>*/}

            {/*<Text>или</Text>*/}
            <Button
            title="Войти"
            onPress={() =>
                navigation.navigate('Login')
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        top: 250,
        left:0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        borderColor: '#fdd81a',
        borderWidth: 2,
        padding:10 ,
        fontSize:20,
        margin: 20,
        borderRadius: 20,

    },
    links:{
        margin: 20,
        fontSize:10,
        color:'#fdd81a' ,
    }
});