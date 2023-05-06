import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../Common/Colors';
const CategoryTextSlider = ({ selectCategory }) => {


    const [active, setActive] = useState(1);

    const Categories = [
        {
            id: 1,
            name: "Latest"
        },
        {
            id: 2,
            name: "World"
        },
        {
            id: 3,
            name: "Business"
        },
        {
            id: 4,
            name: "Sports"
        },
        {
            id: 5,
            name: "Life"
        },
        {
            id: 6,
            name: "Movie"
        },
    ];

    const onCategoryClick = (id) => {
        setActive(id);
    };

    return (
        <View>
            {/* <Text>Category Slider</Text> */}
            <FlatList data={Categories} renderItem={({ item, index }) => (
                // <TouchableOpacity onPress={() => onCategoryClick(item.id)} > // The blow is the right code to get data by category
                <TouchableOpacity onPress={() => { onCategoryClick(item.id); selectCategory(item.id); }} >
                    <Text style={item.id == active ? styles.selectedText : styles.unSelectedText} >{item.name}</Text>
                </TouchableOpacity>
            )} horizontal={true} showsHorizontalScrollIndicator={false} />
        </View>

    )
}


const styles = StyleSheet.create({
    unSelectedText: {
        marginRight: 18, marginTop: 10, fontSize: 18.765, fontWeight: "800", color: Colors.gray
    },
    selectedText: {
        marginRight: 18, marginTop: 10, fontSize: 18.765, fontWeight: "900", color: "#cf352e"
    }
})


export default CategoryTextSlider