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
  barContainer: {
    flex: 1,
    alignItems: 'center',
  },

  barGraph: {
    alignSelf: 'center',
    // overflow: 'hidden', // Use 'hidden' and let ScrollView handle the scrolling
    borderWidth: 1,
  },

  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
   marginVertical:hp(3)
  },
  percentage: {
    color: '#F5B42B',
    fontSize: FontSize.h1_7,
    fontFamily: FontFamily.Norms_Bold,
  },
  rate: {
    color: '#F5B42B',
    fontFamily: FontFamily.Norms_Bold,
    height: hp(3),
    alignItems:'center',
    textAlign:'center'

  },
  rateText: {
    color: '#1A1A1A',
    fontFamily: FontFamily.Norms_Medium,
    fontSize: FontSize.h2_1,
    marginTop:hp(2)
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
    marginBottom: hp(3),
  },
  availableText: {
    fontFamily: FontFamily.Norms_Medium,
    fontSize: FontSize.h1_8,
    color: '#000',
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
  discoverText: {
    color: '#000',
    fontFamily: FontFamily.Norms_Bold,
    fontSize: FontSize.h2_1,
    marginVertical: hp(2),
    paddingLeft: wp(3),
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
