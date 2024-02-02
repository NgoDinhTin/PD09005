import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './HomeScreen';
import User from './UserScreen';
import { Image, View } from 'react-native';


const Tab = createBottomTabNavigator();
const Lab7 = () => {
    return(
      <NavigationContainer>
        <Tab.Navigator>
           <Tab.Screen name ="Home" component = {Home}
           options={{
            tabBarIcon:({focused}) =>{
              return(
                <View>
                  <Image source={require('../../assets/icons/home.png')}
                  resizeMode='contain'
                  style={{width:25}}>
                  </Image>
                </View>
              )
            }
           }}
           />
           <Tab.Screen name ="User" component = {User}
           options={{
            tabBarIcon:({focused}) =>{
              return(
                <View>
                  <Image source={require('../../assets/icons/user.png')}
                  resizeMode='contain'
                  style={{width:25}}>
                  </Image>
                </View>
              )
            }
           }}
           />
        </Tab.Navigator>
      </NavigationContainer>
    );
};

export default Lab7;