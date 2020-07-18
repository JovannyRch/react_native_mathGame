import React from 'react'
import { Text, StyleSheet, SafeAreaView, View, Button, TouchableHighlight, Image } from 'react-native'
import { ButtonGame } from './../../src/components/ButtonGame'
import { ButtonText } from './../../src/components/ButtonText'

export const IndexScreen = () => {

    const handleClick = () => {
        console.log("adios");
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'space-evenly' }}>
                <View style={styles.btn_container}>
                    <View style={{ flex: 1 }}></View>
                    <ButtonGame img={require("./../assets/gift.png")} f={() => { }} />
                </View>
                <View style={styles.box_text}>
                    <Text style={styles.secondary}>Speed</Text>
                    <Text style={styles.main}>Math!</Text>
                </View>
                <View style={styles.btn_container_bottom}>
                    <ButtonText text="Jugar" color="rgb(192,64,78)" f={handleClick} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(51,72,89)',
        height: 100,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        color: "white",

    },
    secondary: {
        color: "white",
        textAlign: 'right',
        fontSize: 40,

    },
    main: {
        color: "white",
        textAlign: 'right',
        fontSize: 85,

    },
    box_text: {
        borderColor: 'red',
        /* borderWidth: 2,
        width: 200, */
        flexDirection: 'column',
    },
    button: {
        alignItems: "center",
        backgroundColor: "rgb(229,192,59)",
        padding: 10,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'white',
        shadowOpacity: 1.0,
    },
    btn_container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    btn_container_bottom: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },

    img: {
        height: 20,
        width: 20,

    }
});
