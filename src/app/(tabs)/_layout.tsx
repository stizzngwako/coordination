import { Tabs } from 'expo-router';
import {Entypo, Feather, MaterialCommunityIcons} from '@expo/vector-icons';


export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name='index'
        options={{
          title:'Home',
          headerShown: false,
          tabBarIcon: ({ color}) => (
            <Entypo name="home" size={24} color="black" />
          )
            
        }}
      
      />

      <Tabs.Screen 
        name='friends'
        options={{
          title:'friend',
          tabBarIcon: ({ color}) => (
            <Feather name="users" size={24} color="color" />
          )
            
        }}
      
      />

      <Tabs.Screen 
        name='newPost'
        options={{
          title:'New post',
          tabBarIcon: ({ color}) => (
           <Feather name="plus-square" size={24} color="color" /> 
          )
            
        }}
      
      />

      <Tabs.Screen 
        name='inbox'
        options={{
          title:'inbox',
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="message-minus-outline" size={24} color="color" />
          )
            
        }}
      
      />

      <Tabs.Screen 
        name='profile'
        options={{
          title:'profile',
          tabBarIcon: ({ color}) => (
            <Feather name="user" size={24} color="black" />
          )
            
        }}
      
      />
    </Tabs>
  )
}