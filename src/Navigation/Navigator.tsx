import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
import Story from '../Screens/Story';
import Analytics from '../Screens/Analytics';
import {analytics, dashboard, story, user} from '../Utils/Images';

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={dashboard} // Use the imported image directly
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'orange' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={analytics} // Use the imported image directly
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'orange' : 'gray',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Story"
          component={Story}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={story} // Use the imported image directly
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'orange' : 'gray',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={user} // Use the imported image directly
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'orange' : 'gray',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
