import React from 'react'
import { TouchableHighlight, StyleSheet, Image, ImageSourcePropType, Text } from 'react-native'

interface Props {
    f: Function,
    text: string,
    color?: string,
    textColor?: string,
}
export const ButtonText: React.FC<Props> = ({ f, text, color, textColor }) => {
    return (
        <TouchableHighlight
            style={{ ...styles.button, backgroundColor: color || "rgb(229,192,59)" }}
            onPress={() => f()}
        >
            <Text style={{ ...styles.txt, color: textColor || 'white' }}>{text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "rgb(229,192,59)",
        padding: 10,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'white',
        shadowOpacity: 1.0,
        width: 100,
        borderRadius: 10,

    },
    txt: {
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
    }
})
