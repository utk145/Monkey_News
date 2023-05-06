import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Linking, ScrollView, Share } from 'react-native';
import Colors from '../Common/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';



const ReadNews = () => {

    const news = useRoute().params.news;
    useEffect(() => {
        // console.log(news);
    }, [])

    const nav = useNavigation();

    const shareNews = () => {
        // Website: https://docs.expo.dev/versions/latest/sdk/sharing/

        // console.log(Sharing.isAvailableAsync()); // To Determine if the sharing API can be used in this app


        const MAX_LENGTH = 200; // Maximum length of the truncated content
        const truncatedContent = news.content.slice(0, MAX_LENGTH); // Truncate the content to 200 characters
        const lastIndexOfFullStop = truncatedContent.lastIndexOf(' '); // Find the last index of the full stop (".") character

        const displayContent = lastIndexOfFullStop !== -1 ? truncatedContent.slice(0, lastIndexOfFullStop + 1) : truncatedContent; // Display the truncated content till the last full stop

        Share.share({
            message: "Read More\n\n" + displayContent + news.url
        });

    }

    return (

        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ marginBottom: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => nav.navigate("Home")}>
                    {/* <TouchableOpacity onPress={()=>nav.goBack()}> */}
                    <MaterialIcons name="arrow-back-ios" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => shareNews()} >
                    <Octicons name="share-android" size={24} color="red" />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: news.urlToImage }} style={{ width: "100%", height: 300, borderRadius: 20 }} />
            <Text style={{ marginTop: 12, fontSize: 22, fontWeight: "700" }}>{news.title}</Text>
            <Text style={{ marginTop: 4, color: Colors.primary, fontSize: 15 ,fontWeight:"600"}}>{news?.source?.name}</Text>
            <ScrollView>
                <Text style={{ marginTop: 13, fontSize: 15, color: Colors.gray, lineHeight: 29 }}>{news.description}</Text>
                <TouchableOpacity onPress={() => { Linking.openURL(news.url) }}>
                    <Text style={{ marginTop: 23, color: Colors.primary, fontSize: 17, fontWeight: "bold" }}>Read More</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

export default ReadNews