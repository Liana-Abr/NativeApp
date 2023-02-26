import { StatusBar } from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Login} from "../store/actions";

export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const submit = () => {
        dispatch(Login(username,password))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Вход</Text>

            <View>
                <Text style={styles.bold}>Почта</Text>
                <TextInput
                    keyboardType="default"
                    style={styles.input}
                    value={username}
                    onChangeText={(text)=> setUsername(text)}
                />


                <Text style={ styles.bold }>Пароль</Text>
                <TextInput
                    keyboardType="default"
                    style={styles.input}
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                />
                <Pressable style={styles.button} >
                    <Button
                        title="Войти"
                        onPress={submit}
                        // onPress={() =>
                        //     navigation.navigate('Lessons')
                        // }
                        style={styles.btnt}
                    >Войти</Button>
                </Pressable>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        top: 100,
        left:80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        margin:30,
        fontWeight: "bold",
        fontSize: 30,
    },
    bold:{

        fontWeight: "400",
        margin:5 ,
        fontSize:20,
    },
    input:{
        width: 250,
        height:50,
        padding:10,
        marginBottom: 15,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5
    },
    btn:{
        padding:20,
        backgroundColor: "green",
        borderWidth:2,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop:20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#f8d428',
    },
    btnt: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    other: {
        marginTop: 15,
        marginBottom: 5,
    },
});