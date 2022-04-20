import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../pages/SettingsScreen'
import MainTabs from './MainTabs'
import colors from '../../theme/colors'


function LeftDrawer ({ data }) {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: colors.textPrimary,
                drawerActiveBackgroundColor: colors.primary
            }}
            
            // drawerType="front"
            // drawerContent={(props) => <DrawerContent {...props} />}
      //  initialRouteName="HOME"
      //  drawerContentOptions={{
      //    activeTintColor: '#e91e63',
      //    itemStyle: { marginVertical: 10 },
      //  }}
        >
            <Drawer.Screen name="Home" component={MainTabs} data={data} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default LeftDrawer