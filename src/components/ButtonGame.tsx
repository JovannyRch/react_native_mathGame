import React from 'react'
import { TouchableHighlight, StyleSheet, Image, ImageSourcePropType, Text } from 'react-native'

interface Props {
    img?: string,
    f: Function,
    text?: string,
    color?: string
}
export const ButtonGame: React.FC<Props> = ({ img, f, text, color }) => {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={() => f()}
        >
            {
                text ?
                    <Text>{text}</Text> :
                    <Image style={{ ...styles.img, backgroundColor: color || "rgb(229,192,59)" }} source={require('./../assets/gift.png')} />
            }
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
        borderRadius: 10,
    },
    img: {
        height: 20,
        width: 20,
    }
})
