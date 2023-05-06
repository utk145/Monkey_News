import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../Common/Colors';
import GlobalApi from '../../Connection/GlobalApi'

const TopHeadlineSlider = ({ newsList, setNewsList, getTopHeadlines }) => {

    // const [newsList, setNewsList] = useState([]);


    // useEffect(() => {
    //     getTopHeadlines();
    // }, [])

    // const getTopHeadlines = async () => {
    //     const result = (await GlobalApi.getTopHeadlines).data;
    //     // console.log(result);
    //     setNewsList(result.articles)
    // }


    const nav = useNavigation();


    return (


        <View>
            <FlatList data={newsList}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ width: Dimensions.get('screen').width * 0.80 }} onPress={()=>nav.navigate('Reader',{news:item})}>
                        <Image source={{ uri: item.urlToImage }}
                            style={{ height: Dimensions.get('screen').width * 0.78, borderRadius: 12, marginRight: 24, marginTop: 14 }}
                        />
                        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "900", }} numberOfLines={3} ellipsizeMode="tail">{item.title}</Text>
                        <Text style={{ marginTop: 10, color: Colors.primary, marginBottom: 25, fontWeight: "600" }}>{item?.source?.name}</Text>
                    </TouchableOpacity>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default TopHeadlineSlider