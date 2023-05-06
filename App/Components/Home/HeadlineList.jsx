import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Colors from '../../Common/Colors'
import * as WebBrowser from 'expo-web-browser';

const HeadlineList = ({ newsList }) => {

    
    const openLinkInBrowser = async (url) => {
        try {
            await WebBrowser.openBrowserAsync(url, { toolbarColor: '#cf352e', browserPackage: 'com.android.chrome' });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View>
            <FlatList
                data={newsList}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ height: 1, backgroundColor: Colors.lightGray, marginTop: 13, marginLeft: -20 }}></View>
                        <TouchableOpacity style={{ marginTop: 14, display: "flex", flexDirection: "row" }}
                            // onPress={() => WebBrowser.openBrowserAsync(item.url)} // This will give options of available browsers if default browser is not set
                            onPress={() => openLinkInBrowser(item.url)}
                        >
                            {/* Clicking this will open the in-app browser */}
                            <Image source={{ uri: item.urlToImage }} style={{ width: 145, height: 145, borderRadius: 13 }} />
                            <View style={{ marginRight: 130, marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: "900" }} numberOfLines={4}>{item.title}</Text>
                                <Text style={{ color: Colors.primary, marginTop: 10, fontWeight: "600" }}>{item?.source?.name}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                )}

            />
        </View>
    )
}

export default HeadlineList