import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontFamily} from '../Utils/Fonts';

interface RevenueCardProps {
  text: string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({text}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}>
      <View
        style={[
          styles.card,
          isPressed
            ? styles.cardPressedBackground
            : styles.cardNormalBackground,
        ]}>
        <Text style={isPressed ? styles.textPressed : styles.textNormal}>
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
