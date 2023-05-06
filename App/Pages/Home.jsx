import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import Colors from '../Common/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Connection/GlobalApi';
import { useNavigation } from '@react-navigation/native';



const Home = () => {

    const [newsList, setNewsList] = useState([]);


    // For Loader
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // getTopHeadlines();
        getByCategory("latest");
    }, [])

    const getTopHeadlines = async () => {
        const result = (await GlobalApi.getTopHeadlines).data;
        // console.log(result);
        setNewsList(result.articles)
    }


    const getByCategory = async (category) => {
        setLoading(true);
        const result = (await GlobalApi.getByCategory(category)).data;
        // console.log(result);
        setNewsList(result.articles)
        setLoading(false);
    }


    const nav = useNavigation();



    return (
        <ScrollView style={{ backgroundColor: "white" }}>

            <View style={styles.barHeader}>
                <Text style={styles.appName}>Monkey News </Text>
                {/* <Ionicons name="notifications" size={24} color="#f22952" /> */}
                {/* <Ionicons name="notifications-outline" size={24} color="black" /> */}
                {/* <MaterialCommunityIcons name="bell-badge-outline" size={28} color="red" /> */}
                <TouchableOpacity onPress={() => nav.navigate("Utk")}>
                    <MaterialCommunityIcons name="bell-badge" size={29} color="red" />
                </TouchableOpacity>
            </View>
            <CategoryTextSlider selectCategory={(category) => getByCategory(category)} />
            {loading ? <ActivityIndicator size={50} color="#cf352e" style={{ marginTop: 50 }} /> :
                <View>
                    <TopHeadlineSlider newsList={newsList} setNewsList={setNewsList} getTopHeadlines={getTopHeadlines} />
                    <HeadlineList newsList={newsList} />
                </View>
            }


        </ScrollView >
    )
}

// Trick: Type `rns` for Styling
const styles = StyleSheet.create({
    appName: {
        fontSize: 28,
        fontWeight: "bold",
        color: Colors.primary,
        color: "#cf352e",

    },
    barHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})

export default Home