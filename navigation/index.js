import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/Home';
import PostScreen from '../screens/PostScreen';
import Settings from '../screens/SettingsScreen';
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const tabOffsetValue = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 40,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: { width: 10, height: 10 },
          },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                }}
              >
                <MaterialCommunityIcons name="home" color={color} size={size} />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Notifications"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                }}
              >
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bell"
                    color={color}
                    size={size}
                  />
                </TouchableOpacity>
              </View>
            ),
            tabBarBadge: 3,
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Profi21le"
          component={PostScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  position: 'absolute',
                  top: '-70%',
                  padding: 20,
                  backgroundColor: 'red',
                  borderRadius: 100,
                }}
              >
                <MaterialCommunityIcons name="plus" color={'white'} size={25} />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Profile"
          component={PostScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                }}
              >
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Profi2le"
          component={PostScreen}
          options={{
            tabBarLabel: 'Pro1file2',
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                }}
              >
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 99,
          left: 30,
          borderRadius: '50%',
          transform: [
            {
              translateX: tabOffsetValue,
            },
          ],
        }}
      ></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get('window').width;
  width = width - 40;

  return width / 5;
}
