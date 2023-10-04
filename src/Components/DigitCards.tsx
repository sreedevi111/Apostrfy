import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontFamily} from '../Utils/Fonts';

interface DigitCardProps {
  text: any;
}

const DigitCards: React.FC<DigitCardProps> = ({text}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default DigitCards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: wp(23),
    height: hp(7),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft:wp(2)
  },
  textStyle: {
    color: '#000000',
    fontFamily: FontFamily.Norms_Bold,
  },
});
