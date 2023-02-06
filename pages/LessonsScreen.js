import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import * as React from "react";

export default function LessonsScreen({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Тут находятся все доступные уроки</Text>
                <Pressable style={styles.button}>
                    <Button style={styles.btnt} color="black" title="Добавить урок"></Button>
                </Pressable>
            </View>
            <View style={styles.cards}>
                <Pressable style={styles.card}>
                    <Button
                        style={styles.btnt}
                        color="black"
                        title="Урок 1"
                        onPress={() =>
                            navigation.navigate('Lesson')
                        }
                    />
                </Pressable>

            </View>



        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        padding:10,
    },
    header:{
        display:"flex",
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#f8d428',
    },
    btnt: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,

    },
    cards:{
        display:"flex",
        flexDirection:"row"
    },
    card:{
        borderWidth: 2,
        margin: 10,
        borderColor: "#f8d428",
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        width:100,
        height:100,

    }
})