import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import RevenueCard from '../../Components/RevenueCard';
import {arrowRight, discoverImg1, greenDot, redDot} from '../../Utils/Images';
import DigitCards from '../../Components/DigitCards';
import {Calendar} from 'react-native-calendars'; // Import the Calendar component
import CarouselCard from '../../Components/CarouselCard';

const Dashboard = () => {
  // Sample marked dates for demonstration
  const markedDates = {
    '2023-10-10': {dots: [{key: 'booked', color: 'red'}]},
    '2023-10-11': {dots: [{key: 'available', color: 'green'}]},
    '2023-10-12': {dots: [{key: 'booked', color: 'red'}]}, // Example with both dots
  };

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

        {/* Integrate the Calendar here */}
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

        <Text style={styles.revenueText}>Net Revenue</Text>
        <View style={styles.revenueRow}>
          <RevenueCard text="3m" />
          <RevenueCard text="6m" />
          <RevenueCard text="1 yr" />
          <RevenueCard text="2 yrs" />
          <RevenueCard text="Max" />
        </View>
      </View>

      <CarouselCard image={discoverImg1} title='Bohemia Rapper'/>
    </ScrollView>
  );
};

export default Dashboard;
