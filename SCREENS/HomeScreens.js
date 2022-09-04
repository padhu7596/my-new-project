
import React from 'react'
import Data from './Data'
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// import DraggableFlatList from 'react-native-draggable-flatlist'





const HomeScreens = () => {
    console.log(Data)
    return (
        <View>
            <ScrollView>
                {Data.map((item) => {
                    return (
                        <View >

                            <View style={style.card}>
                                <TouchableOpacity>
                                    <Text style={style.bage}>{item.groupname}</Text>
                                </TouchableOpacity>
                                <View style={style.container}>
                                    <TouchableOpacity>
                                        <Image source={{ uri: "https://img.icons8.com/ios-filled/50/26409f/share--v1.png" }} style={style.image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={{ uri: "https://img.icons8.com/windows/32/26409f/retro-alarm-clock.png" }} style={style.image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={{ uri: "https://img.icons8.com/ios/50/26409f/bookmark-ribbon--v1.png" }} style={style.image} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                {item.workout.map
                                    ((wk) => {
                                        return (
                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={style.word}>
                                                        {wk.name}
                                                    </Text>
                                                    <Image source={{ uri: "https://img.icons8.com/ios-filled/50/EBEBEB/plus.png" }} style={style.image} />
                                                </View>
                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        
                                                        
                                                        {/* <DraggableFlatList
                                                        data={wk.images}
                                                        renderItem={({img})=>{return(
                                                            <View>
                                                            <Image source={img} />
                                                        </View>

                                                        )}}
                                                        /> */}


                                                         {wk.images.map((img) => {

                                                            console.log(img)
                                                            return (
                                                                <View>
                                                                    <Image style={style.cards}source={img} />
                                                                </View>
                                                            )
                                                        })}
                                                        {/* <Image source={require('../assets/1.png')} style={style.cards} /> */}
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }

                                    )}

                            </View>
                        </View>)

                })}
            </ScrollView>
        </View>
    )
};

const style = StyleSheet.create({
    card: {

        flexDirection: 'row',
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 5,
        
    },
    bage: {
        color: 'white',
        backgroundColor: '#26409f',
        padding: 10,
        marginTop: 15,
        borderRadius: 10,
        marginLeft: 10,
    },
    image: {
        height: 30,
        width: 30,
        marginLeft: 10,
        resizeMode: 'contain',
        marginTop: 10
    },
    word: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 30


    },
    cards: {
        marginTop: 10,
        marginLeft: 10,
        resizeMode: 'contain',
    }
});
export default HomeScreens