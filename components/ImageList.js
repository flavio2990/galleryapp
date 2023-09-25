import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import CardImage from "../components/CardImage";


export default function ImageList({ photos }) {

    const renderItem = (({ item }) => <CardImage image={item}/>
    )

    return (
        <View>
            <FlatList
                data={photos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} 
                numColumns={2}/>
        </View>
    )
}
