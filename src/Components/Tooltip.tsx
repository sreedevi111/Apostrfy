import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontFamily, FontSize} from '../Utils/Fonts';

const Tooltip = ({value}) => {
  return (
    <View style={styles.tooltipContainer}>
      <Text style={styles.tooltipText}>{value}</Text>
      <View style={styles.tooltipArrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  tooltipContainer: {
    backgroundColor: '#E5E4DE',
    borderRadius: wp(2),
    alignItems: 'center',
    width: wp(10),
    minHeight: hp(3),
    alignContent:'center',
    justifyContent:'center'
  },
  tooltipText: {
    color: '#1C1C1C',
    fontSize: FontSize.h1_6,
    fontFamily: FontFamily.Norms_Bold,
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: -5, // position the arrow at the bottom
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#E5E4DE', // arrow color
    transform: [{rotate: '180deg'}], // rotate the arrow to point downwards
  },
});

export default Tooltip;
