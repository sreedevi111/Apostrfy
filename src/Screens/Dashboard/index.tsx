import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {BarChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
// import {Rect} from 'react-native-svg';
import {BarChart} from 'react-native-gifted-charts';

import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import {
  arrowRight,
  greenDot,
  redDot,
  call,
  email,
  whatsapp,
} from '../../Utils/Images';
import RevenueCard from '../../Components/RevenueCard';
import DigitCards from '../../Components/DigitCards';
import {renderCarouselItem} from '../../Components/CarouselCard';
import {
  carouselItems,
  markedDates,
  dataWithLabels,
  timeFrameMapping,
} from '../../Utils/DummyData';
import ProgressCircle from 'react-native-progress-circle';
import Tooltip from '../../Components/Tooltip';

const Dashboard = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('3m');
  console.log('Selected Frame:::', selectedTimeFrame);
  const [selectedBar, setSelectedBar] = useState(0);
  const [avgRoomRate, setAvgRoomRate] = useState(dataWithLabels[0].avgRoomRate);
  const [occupancy, setOccupancy] = useState(dataWithLabels[0].occupancy);
  const [barData, setBarData] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const sliceLength =
      timeFrameMapping[selectedTimeFrame] || dataWithLabels.length;
    const newBarData = dataWithLabels
      .slice(0, sliceLength)
      .map((entry, index) => {
        const isSelectedBar = index === selectedBar;
        return {
          ...entry,
          frontColor: isSelectedBar ? '#FFB627' : '#FBDEB5',
          topLabelComponent: isSelectedBar
            ? () => <Tooltip value={entry.value} />
            : null,
        };
      });
    console.log('newBarData', newBarData);
    setBarData(newBarData);
  }, [selectedBar, selectedTimeFrame]);

  // Sample marked dates for demonstration

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.digitCardRow}>
        {['All', '30506', '30507', '30508'].map(text => (
          <DigitCards key={text} text={text} />
        ))}
      </View>

      <View style={styles.statBox}>
        <View style={styles.row1}>
          <Text style={styles.stats}>Stats</Text>
          <View style={styles.row2}>
            <Text style={styles.details}>Details</Text>
            <Image source={arrowRight} />
          </View>
        </View>

        {/* <ScrollView contentContainerStyle={styles.barContainer}> */}
        {/* <View style={styles.barGraph}> */}
        <BarChart
          // width={300}
          data={barData}
          onPress={(item, index) => {
            console.log('item', index);
            setSelectedBar(index);
            setAvgRoomRate(dataWithLabels[index].avgRoomRate);
            setOccupancy(dataWithLabels[index].occupancy);
          }}
          barBorderRadius={12}
          yAxisThickness={0}
          xAxisThickness={0}
          hideYAxisText={true}
          showLine={false}
          hideRules={true}
        />
        {/* </View> */}
        {/* </ScrollView> */}

        <View style={styles.dataRow}>
          <View>
            <ProgressCircle
              percent={occupancy}
              radius={35}
              borderWidth={8}
              color="#F5B42B"
              shadowColor="#FBDEB5"
              bgColor="#fff">
              <Text style={styles.percentage}>{occupancy + '%'}</Text>
            </ProgressCircle>
            <Text style={styles.rateText}>Occupancy</Text>
          </View>

          <View style={{flexDirection:'column', display: 'flex',}}>
            <Text style={styles.rate}>{avgRoomRate}</Text>
            <Text style={styles.rateText}>Avg Room Rate</Text>
          </View>
        </View>

        <Text style={styles.revenueText}>Net Revenue</Text>
        <View style={styles.revenueRow}>
          {['3m', '6m', '1yr', '2yrs', 'Max'].map(text => (
            <RevenueCard
              key={text}
              text={text}
              isSelected={selectedTimeFrame === text}
              onPress={() => {
                setSelectedTimeFrame(text)
                setSelectedBar(0);
                setAvgRoomRate(dataWithLabels[0].avgRoomRate);
                setOccupancy(dataWithLabels[0].occupancy);
              }}
            />
          ))}
        </View>
      </View>

      <View style={styles.calenderBox}>
        <View style={styles.row1}>
          <Text style={styles.stats}>Bookings</Text>
          <View style={styles.row2}>
            <Text style={styles.details}>Details</Text>
            <Image source={arrowRight} />
          </View>
        </View>

        <Calendar
          markedDates={markedDates}
          markingType={'multi-dot'}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9ef',
          }}
        />

        <View style={styles.availabilityRow}>
          <View style={styles.dotRow}>
            <Image source={redDot} />
            <Text style={styles.availableText}>Nights Booked</Text>
          </View>
          <View style={styles.dotRow}>
            <Image source={greenDot} />
            <Text style={styles.availableText}>Nights Available</Text>
          </View>
        </View>
      </View>
      <Text style={styles.discoverText}>Discover</Text>
      <Carousel
        data={carouselItems}
        renderItem={renderCarouselItem}
        sliderWidth={wp(90)} // replace with your screen width or desired width
        itemWidth={wp(65)} // replace with your desired item width
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
