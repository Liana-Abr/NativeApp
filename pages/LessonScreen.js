import { StyleSheet, Text, View} from 'react-native';
import * as React from "react";

export default function LessonScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Название урока</Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum maiores ullam? Deleniti, distinctio eius et eum eveniet fuga incidunt ipsum officiis pariatur quod rerum sunt vel voluptatum. Ipsum, totam.
            </Text>


        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems: "center"
    },
    title:{
        fontSize:20,
        marginTop:10,
        fontWeight: "bold"
    },
    text:{
        marginTop:20,
        fontSize: 15
    }
})