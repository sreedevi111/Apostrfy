import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { arrowRight, } from '../Utils/Images'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import {FontFamily, FontSize} from '../Utils/Fonts';


interface CarouselCardProps {
    title: string,
    date1: any,
    date2: any,
    note: string,
    image: any
}

const CarouselCard = ({title, date1, date2, note, image}: CarouselCardProps) => {
  return (
    <View style={styles.container}>
        <Image source={image}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default CarouselCard

const styles = StyleSheet.create({
    container:{
        width:wp(60),
        height:hp(30),
        backgroundColor:'white',
        flex:1
    },
    title:{
        fontFamily: FontFamily.Norms_Black,
        fontSize: FontSize.h1_9
    }
})