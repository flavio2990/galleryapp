import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Image, StyleSheet, Alert } from "react-native";
import pexelsLogo from './assets/pexelslogo.png'

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import { useState } from 'react';


const Stack = createNativeStackNavigator()


export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
            headerRight: () => (
              <Text
                style={{ color: 'white', fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? 'Close' : 'Search'}
              </Text>
            ),
            title: 'Pexels Galery',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#0D0D0D',
            }
          }}>
            {(props)=><HomeScreen {...props} openSearch={openSearch}/>}
          </Stack.Screen>
        <Stack.Screen 
        name="ImageScreen" 
        component={ImageScreen} 
        options={{
          title: 'Pexels Galery',
          headerTintColor:'#fff',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#0D0D0D',
            }
        }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  logo: {
    height: 37,
    width: 37,
    marginEnd: 5,
    borderRadius: 5,
  }
})