import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Fontisto } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    "Thunderstorm":{
        iconName : "lightnings",
        gradient:["#322E9C","#1D1649"],
        title:"우르르쾅쾅!",
        subtitle : "오늘은 집에 있는게 좋겠어요"
    },
    "Drizzle":{
        iconName : "rain",
        gradient:["#7195A9","#021428"],
        title:"축축한 날씨",
        subtitle : "우산 꼭 챙겨 나가세요"
    },
    "Rain":{
        iconName : "rains",
        gradient:["7195A9","021428"],
        title:"축축한 날씨",
        subtitle : "우산 꼭 챙겨 나가세요"
    },
    "Snow":{
        iconName : "snows",
        gradient:["#22629F","#001B4A"],
        title:"밖에 쓰레기가떨어져요!",
        subtitle : "감기 조심하세요"
    },
    "Atmosphere":{
        iconName : "cloudy",
        gradient:["#717D89","#2c3e50"],
        title:"우중충한 날씨",
        subtitle : "혹시 모르니 따듯하게 입고가요"
    },
    "Clear":{
        iconName : "day-sunny",
        gradient:["#f7797d","#FBD786","#C6FFDD"],
        title:"화창한 날씨군요.",
        subtitle : "썬크림 두둑히 바르고 나가세요 살타요"
    },
    "Clouds":{
        iconName : "cloudy",
        gradient:["#f7797d","#86A8E7","#7F7FD5"],
        title:"우중충한 날씨",
        subtitle : "혹시 모르니 따듯하게 입고가요."
    },
    "Mist":{
        iconName : "fog",
        gradient:["#605C3C","#3C3B3F"],
        title:"앞이 안보여요",
        subtitle : "안개때문에 앞이 안보니이니 조심하세요"
    },
    "Smoke":{
        iconName : "cloudy",
        gradient:["#717D89","#2c3e50"],
        title:"우중충한 날씨",
        subtitle : "혹시 모르니 따듯하게 입고가요"
    },
    "Haze":{
        iconName : "day-haze",
        gradient:["#C06C84","#6C5B7B","#355C7D"],
        title:"구름이 많아요",
        subtitle : "과연 구름만 많을까요? 미세먼지도 많아요"
    },
    "Dust":{
        iconName : "cloudy",
        gradient:["#717D89","#2c3e50"],
        title:"우중충한 날씨",
        subtitle : "혹시 모르니 따듯하게 입고가요"
    },
    "Fog":{
        iconName : "fog",
        gradient:["#605C3C","#3C3B3F"],
        title:"앞이 안보여요",
        subtitle : "안개때문에 앞이 안보니이니 조심하세요"
    },
    "Sand":{
        iconName : "day-haze",
        gradient:["#C06C84","#6C5B7B","#355C7D"],
        title:"구름이 많아요",
        subtitle : "과연 구름만 많을까요? 미세먼지도 많아요"
    },
    "Squall":{
        iconName : "day-rain",
        gradient:["#C06C84","#6C5B7B","#355C7D"],
        title:"소나기와요",
        subtitle : "혹시 모르니 우산 챙겨요"
    },
    "Tornado":{
        iconName : "wind",
        gradient:["#2c3e50","#bdc3c7"],
        title:"바람이 많이불어요",
        subtitle : "머리가 산발이 될수도있어요"
    },
}

export default function Weather({temp,condition}){// 잊지말고 prop에 {} ES6 써주기.그게 아니면 Text 안에 temp.temp 써주기.
    // console.log(condition);
    return(
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Fontisto name={weatherOptions[condition].iconName} size={90} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer,...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Fog",
        "Sand",
        "Dust",
        "Squall",
        "Tornado",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: "center",
        alignItems:"center"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:36,
        color: "white"
    },
    title:{
        color:"white",
        fontSize : 54,
        fontWeight:"300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal: 20 ,
        alignItems: "flex-start"
    }
})