import React from "react";
import { StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardImage({ image }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.CardImage}
            onPress={() => navigation.navigate('ImageScreen', {image})}>
            <Image source={{
                uri:
                    image.src.large2x ?
                        image.src.large2x
                        : 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
            }}
                style={{ height: 180, width: '100%' }} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    CardImage: {
        display: "flex",
        width: '49.5%',
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 50,
    }
})