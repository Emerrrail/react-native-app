import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTabs from '../molecules/BottomTabs'
import FeedScreen from '../pages/FeedScreen'
import AlbumsScreen from '../pages/AlbumsScreen'

function MainTabs () {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBar={(props) => <BottomTabs {...props} />}
            screenOptions={{headerShown: false}}
        >
            <Tab.Screen name="FEED" component={FeedScreen} />
            <Tab.Screen name="ALBUMS" component={AlbumsScreen} />
        </Tab.Navigator>
    )
}

export default MainTabs