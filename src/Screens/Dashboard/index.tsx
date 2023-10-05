import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import RevenueCard from '../../Components/RevenueCard';
import {
  arrowRight,
  discoverImg1,
  discoverImg2,
  greenDot,
  redDot,
  call,
  email,
  whatsapp,
} from '../../Utils/Images';
import DigitCards from '../../Components/DigitCards';
import {Calendar} from 'react-native-calendars'; // Import the Calendar component
import CarouselCard from '../../Components/CarouselCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {CarouselCardProps} from '../../Components/CarouselCard';

const Dashboard = () => {
  // Sample marked dates for demonstration
  const markedDates = {
    '2023-10-10': {dots: [{key: 'booked', color: 'red'}]},
    '2023-10-11': {dots: [{key: 'available', color: 'green'}]},
    '2023-10-12': {dots: [{key: 'booked', color: 'red'}]}, // Example with both dots
  };

  const carouselItems = [
    {
      image: discoverImg1,
      title: 'Bohemia Rapper',
      date1: '12/09/2023',
      date2: '14/09/2023',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: discoverImg2,
      title: 'Anjunadeep',
      date1: '15/09/2023',
      date2: '16/09/2023',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: discoverImg1,
      title: 'Bohemia Rapper',
      date1: '12/09/2023',
      date2: '14/09/2023',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: discoverImg2,
      title: 'Anjunadeep',
      date1: '15/09/2023',
      date2: '16/09/2023',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // ... add more items as needed ...
  ];

  const renderCarouselItem = ({item}) => (
    <CarouselCard
      image={item.image}
      title={item.title}
      date1={item.date1}
      date2={item.date2}
      note={item.note}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.digitCardRow}>
        <DigitCards text="All" />
        <DigitCards text="30506" />
        <DigitCards text="30507" />
        <DigitCards text="30508" />
      </View>

      <View style={styles.statBox}>
        <View style={styles.row1}>
          <Text style={styles.stats}>Stats</Text>
          <View style={styles.row2}>
            <Text style={styles.details}>Details</Text>
            <Image source={arrowRight} />
          </View>
        </View>

        <Text style={styles.revenueText}>Net Revenue</Text>
        <View style={styles.revenueRow}>
          <RevenueCard text="3m" />
          <RevenueCard text="6m" />
          <RevenueCard text="1 yr" />
          <RevenueCard text="2 yrs" />
          <RevenueCard text="Max" />
        </View>

       
      </View>

      <View style={styles.calenderBox}> 
        <Calendar markedDates={markedDates} markingType={'dot'} />

        <View style={styles.availabilityRow}>
          <View style={styles.dotRow}>
            <Image source={redDot} />
            <Text>Nights Booked</Text>
          </View>
          <View style={styles.dotRow}>
            <Image source={greenDot} />
            <Text>Nights Available</Text>
          </View>
        </View>
      </View>

      <Carousel
        data={carouselItems}
        renderItem={renderCarouselItem}
        sliderWidth={wp(90)} // replace with your screen width or desired width
        itemWidth={wp(65)} // replace with your desired item width
        // ... other carousel props ...
      />

      <View style={styles.contactCard}>
        <Text style={styles.contactText}>Contact us</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.icon}>
            <Image source={call} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={email} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={whatsapp} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
