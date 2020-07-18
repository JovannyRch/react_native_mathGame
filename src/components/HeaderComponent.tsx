import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export interface Props {
    title: string;
    enthusiasmLevel?: number;
}

export const HeaderComponent: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <View
                style={styles.container}
            >
                <Image
                    style={styles.image}
                    source={require('./../assets/logo.png')}
                />
                <View style={styles.right}>
                    {children}
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 26,
        resizeMode: 'contain',
        paddingHorizontal: 10,
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
