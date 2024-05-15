import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import Home from '../../screen/home/Home';
import { globalfonts } from '../../styles/fonts';
import Delivery from '../../screen/home/Delivery';
import Dinning from '../../screen/home/Dinning';
import Live from '../../screen/home/Live';
const TabNavigation = () => {
  const tabs = [
    {
      id: 1,
      name: 'Delivery',
      component: Delivery,
      focusedIconName: 'truck-delivery',
      unfocusedIconName: 'truck-delivery-outline',
      iconType: 'material-community',
      focusedSize: 25,
      unfocusedSize: 25,
    },
    {
      id: 2,
      name: 'Dining',
      component: Dinning,
      focusedIconName: 'fast-food-sharp',
      unfocusedIconName: 'fast-food-outline',
      iconType: 'ionicon',
      focusedSize: 30,
      unfocusedSize: 30,
    },
    {
      id: 3,
      name: 'Live',
      component: Live,
      focusedIconName: 'network-wifi',
      unfocusedIconName: 'signal-wifi-statusbar-null',
      iconType: 'materialIcons',
      focusedSize: 24,
      unfocusedSize: 24,
    },
 
  ];

  const CommonTabBarIcon = ({name, type, size}) => {
    return <Icon size={size} name={name} type={type} color="#001C00" />;
  };

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#9AE16C",
          height: Platform.OS === 'android' ? 70 : 90,
          padding: Platform.OS === 'android' ? 5 : 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          ...globalfonts.medium,
          color: "#001C00",
          bottom: Platform.OS === 'android' ? 5 : 0,
        },
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab?.id}
          name={tab.name}
          component={tab.component}
          options={() => ({
            tabBarIcon: ({focused}) => (
              <CommonTabBarIcon
                size={focused ? tab.focusedSize : tab.unfocusedSize}
                name={focused ? tab.focusedIconName : tab.unfocusedIconName}
                type={tab.iconType}
              />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
