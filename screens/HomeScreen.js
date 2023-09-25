import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements"

import ImageList from "../components/ImageList";

import { getImages } from "../api/pexels";


export default function HomeScreen({ openSearch }) {
    const [photos, setPhotos] = useState([])
    const [searchTerm, setSearchTerm] = useState(" ")


    const loadImages = async (searchTerm) => {
        const res = await getImages(searchTerm)
        setPhotos(res.data.photos)
    }

    useEffect(() => {
        loadImages()
    }, [])

    const handleSearch = async () => {
        await loadImages(searchTerm)
    }

    return (
        <>
            {openSearch && (
                <View style={styles.searchSection}>
                    <Input
                        leftIcon={{ type: 'feather', name: 'search', color: 'white' }}
                        placeholder="Search a Term"
                        style={styles.input}
                        leftIconContainerStyle={styles.searchLeftIcon}
                        inputContainerStyle={styles.searchInput}
                        onChangeText={(value) => setSearchTerm(value)}
                    />
                    <Button
                        buttonStyle={styles.buttonSearch}
                        title='Search'
                        onPress={() => handleSearch()}
                    />
                </View>
            )}
            <View style={styles.container}>
                <Text style={styles.totalResultText}> 1000 resultados</Text>
                <ImageList photos={photos} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
    },
    totalResultText: {
        color: '#D0D0D0',
        textAlign: 'right',
        width: '100%',
    },
    searchSection: {
        backgroundColor: '#0D0D0D',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 80,
        flex: 1 / 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        backgroundColor: '#2C292c',
        borderBottomWidth: 0,
        paddingHorizontal: 4,
    },
    input: {
        color: 'white',
    },
    searchLeftIcon: {
        paddingStart: 10,
        marginRight: 7,
    },
    buttonSearch: {
        backgroundColor: '#229783',
        marginBottom: 27,
    }
})