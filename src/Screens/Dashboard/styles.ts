import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontFamily, FontSize} from '../../Utils/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  title: {
    fontFamily: FontFamily.Norms_Bold,
    color: '#052027',
    alignSelf:'center',
    fontSize:FontSize.h2_5,
    margin:hp(2)
  },
});

export default styles;
