import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";//expo install expo-location
import { Alert } from 'react-native';
import Axios from 'axios';
import Weather from './Weather';


const API_KEY = "a39ce3fe402af817d48d43a76afa56f4";
export default class extends React.Component {
  state = {
    isLoading : true,
  }
  getWeather = async(latitude,longitude)=> {
    const {data:{main:{temp},weather},data} = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({isLoading:false, condition: weather[0].main, temp});

  }
  getLocation = async() => { // 함수 생성
    try { //trycatch = try 안에 에러가 발생한다면 catch 가 실행되는 구조.
      // throw Error();
      await Location.requestPermissionsAsync();// 위치 허가 여부
      const {coords : {latitude,longitude}} = await Location.getCurrentPositionAsync(); // 사용자 위치 가져오기.
      // EX6 = coords 안에 lat, long 찾기.
      this.getWeather(latitude,longitude);


    } catch (error) {
      Alert.alert("위치 사용 거부","설정에서 위치를 허용해주세요.");
    }
  }
  componentDidMount(){// render가 실행되고 다음으로 실행되는 메서드
    this.getLocation();
  }
  render(){
    const {isLoading, condition, temp} = this.state;
    return isLoading ?<Loading /> :<Weather temp={Math.round(temp)} condition={condition} />
  }
}
