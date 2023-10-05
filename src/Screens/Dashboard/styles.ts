import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontFamily, FontSize} from '../../Utils/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(2),
    // backgroundColor: 'white',
  },
  title: {
    fontFamily: FontFamily.Norms_Bold,
    color: '#052027',
    alignSelf: 'center',
    fontSize: FontSize.h2_5,
    margin: hp(2),
  },
  digitCardRow: {
    flexDirection: 'row',
    marginLeft: wp(2),
    justifyContent: 'space-around',
  },
  statBox: {
    backgroundColor: 'white',
    marginVertical: hp(3),
    borderRadius: wp(3),
    width: wp(95),
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(3),
  },
  stats: {
    color: '#052027',
    fontFamily: FontFamily.Norms_Bold,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(18),
    justifyContent: 'space-between',
  },
  details: {
    color: '#F36821',
    fontFamily: FontFamily.Norms_Medium,
  },
  availabilityRow: {
    flexDirection: 'row',
  },
  calenderBox: {
    backgroundColor: 'white',
    margin: hp(2),
    borderRadius: wp(2),
  },
  dotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(33),
    justifyContent: 'space-around',
  },
  revenueText: {
    alignSelf: 'center',
    fontFamily: FontFamily.Norms_Medium,
    color: '#1A1A1A',
    fontSize: FontSize.h2_1,
    margin: hp(2),
  },
  revenueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactCard: {
    backgroundColor: 'white',
    width: wp(90),
    height: hp(9),
    marginVertical: hp(3),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    borderRadius: wp(3),
  },
  icon: {
    margin: wp(1),
  },
  contactText: {
    fontFamily: FontFamily.Norms_Bold,
    color: '#052027',
  },
});

export default styles;
