import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FontFamily } from '../Utils/Fonts';

interface RevenueCardProps {
  text: string;
  isSelected: boolean; // To determine if the card is currently selected
  onPress: () => void; // Callback for when the card is pressed
}

const RevenueCard: React.FC<RevenueCardProps> = ({ text, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={[
          styles.card,
          isSelected ? styles.cardPressedBackground : styles.cardNormalBackground,
        ]}>
        <Text style={isSelected ? styles.textPressed : styles.textNormal}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RevenueCard;

const styles = StyleSheet.create({
  card: {
    padding: hp(2),
    borderRadius: wp(5),
    borderWidth: 1,
    borderColor: '#ccc',
    width: wp(18),
    marginVertical: hp(2)
  },
  cardNormalBackground: {
    backgroundColor: '#FBDEB54D',
  },
  cardPressedBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.30)',
  },
  textNormal: {
    color: 'black',
    fontFamily: FontFamily.Norms_Medium,
  },
  textPressed: {
    color: '#F36821',
    fontFamily: FontFamily.Norms_Medium,
  },
});
