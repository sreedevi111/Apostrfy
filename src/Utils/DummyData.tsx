import {discoverImg1, discoverImg2} from './Images';

export const carouselItems = [
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
];

export const markedDates = {
    '2023-10-10': {dots: [{key: 'booked', color: 'red'}]},
    '2023-10-11': {dots: [{key: 'available', color: 'green'}]},
    '2023-10-12': {dots: [{key: 'booked', color: 'red'}]},
  };

  export const dataWithLabels = [
    {value: 50, label: 'Jan', avgRoomRate: 1224, occupancy: 12},
    {value: 10, label: 'Feb', avgRoomRate: 1300, occupancy: 15},
    {value: 40, label: 'Mar', avgRoomRate: 1250, occupancy: 18},
    {value: 90, label: 'Apr', avgRoomRate: 1400, occupancy: 20},
    {value: 65, label: 'May', avgRoomRate: 1350, occupancy: 22},
    {value: 80, label: 'Jun', avgRoomRate: 1200, occupancy: 25},
    {value: 50, label: 'Jul', avgRoomRate: 1100, occupancy: 28},
    {value: 10, label: 'Aug', avgRoomRate: 1150, occupancy: 30},
    {value: 40, label: 'Sep', avgRoomRate: 1230, occupancy: 32},
    {value: 90, label: 'Oct', avgRoomRate: 1280, occupancy: 35},
    {value: 65, label: 'Nov', avgRoomRate: 1330, occupancy: 38},
    {value: 80, label: 'Dec', avgRoomRate: 1380, occupancy: 40},
    {value: 50, label: 'Jan', avgRoomRate: 1420, occupancy: 42},
    {value: 10, label: 'Feb', avgRoomRate: 1450, occupancy: 45},
    {value: 40, label: 'Mar', avgRoomRate: 1500, occupancy: 48},
    {value: 90, label: 'Apr', avgRoomRate: 1550, occupancy: 50},
    {value: 65, label: 'May', avgRoomRate: 1600, occupancy: 52},
    {value: 80, label: 'Jun', avgRoomRate: 1650, occupancy: 55},
    {value: 50, label: 'Jul', avgRoomRate: 1700, occupancy: 58},
    {value: 10, label: 'Aug', avgRoomRate: 1750, occupancy: 60},
    {value: 40, label: 'Sep', avgRoomRate: 1800, occupancy: 62},
    {value: 90, label: 'Oct', avgRoomRate: 1850, occupancy: 65},
    {value: 65, label: 'Nov', avgRoomRate: 1900, occupancy: 68},
    {value: 80, label: 'Dec', avgRoomRate: 1950, occupancy: 70},
  ];

  export const timeFrameMapping = {
    '3m': 3,
    '6m': 6,
    '1yr': 12,
    '2yrs': 24,
  };