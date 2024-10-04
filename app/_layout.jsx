import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const _layout = () => {
  return (
    <Tabs 
    tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
        name="index"
        options={{
            title:"Home"
        }}
        />
         <Tabs.Screen
        name="profile"
        options={{
            title:"Profile"
        }}
        />
         <Tabs.Screen
        name="setting"
        options={{
            title:"Setting"
        }}
        />
    </Tabs>
  )
}

export default _layout