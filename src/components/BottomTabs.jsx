import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens for each tab

// Home Screen Component
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.header}>Welcome to the Home Screen!</Text>
      <Text>Here are some simple options:</Text>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionButtonText}>Option 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionButtonText}>Option 2</Text>
      </TouchableOpacity>
    </View>
  );
}

// Analytics Screen Component
function AnalyticsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.header}>Profile Update Section</Text>
      <View style={styles.profileUpdateContainer}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
        <Button title="Update Profile" onPress={() => alert('Profile Updated!')} />
      </View>
    </View>
  );
}

// Settings Screen Component
function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>Notification Preferences</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>Terms and Conditions</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // Return the icon component from Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          backgroundColor: '#f8f8f8',
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileUpdateContainer: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 10,
  },
  optionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  settingButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  settingButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
// This page is not yet routed so chill 