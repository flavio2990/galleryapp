import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Art Book
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingTop: 25,
        backgroundColor: '#495E57',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuIcon: {
        left: 10,
        color: '#EDEFEE',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EDEFEE',
    },
});
