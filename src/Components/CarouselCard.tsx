import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {arrowRight} from '../Utils/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontFamily, FontSize} from '../Utils/Fonts';

export interface CarouselCardProps {
  title: string;
  date1: any;
  date2: any;
  note: string;
  image: any;
}

const CarouselCard = ({
  title,
  date1,
  date2,
  note,
  image,
}: CarouselCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imgStyle} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>{date1}</Text>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>{date2}</Text>
        </View>
      </View>
      <Text>{note}</Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.details}>Details</Text>
        <Image source={arrowRight} />
      </View>
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  container: {
    width: wp(60),
    height: hp(38),
    backgroundColor: 'white',
    flex: 1,
    padding: hp(2),
    borderRadius:wp(3)
  },
  imgStyle: {
    borderRadius: wp(3),
  },
  title: {
    fontFamily: FontFamily.Norms_Bold,
    fontSize: FontSize.h1_9,
    color: '#1E293B',
    marginVertical: hp(1),
  },
  row: {
    flexDirection: 'row',
  },
  dateView: {
    backgroundColor: '#FBDEB5',
    width: wp(22),
    height: hp(4),
    borderRadius: wp(2),
    marginHorizontal: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: '#000',
  },
  details: {
    color: '#F36821',
    fontFamily: FontFamily.Norms_Medium,
  },
});
