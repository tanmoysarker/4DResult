import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems
} from 'react-navigation';
import { Container, Content, Body,Icon } from 'native-base'
import { View, Image, StyleSheet, AsyncStorage, Text } from 'react-native';
import Single from './src/Single'
import Toolbox from './src/Toolbox'
import Notifications from './src/Notifications'
import Multiple from './src/Multiple'
import Settings from './src/Settings'


class customDrawerContentComponent extends Component {
 
  render() {
    return (
      <Container>
        <Content>
          <Text>Home Page</Text>
        </Content>
      </Container>
    )
  }
}

const DashboardDrawerNavigator = createBottomTabNavigator({
  Single: {
    screen: Single,
    navigationOptions: {
      tabBarLabel: 'Single',
      tabBarIcon:({tintColor})=> (
        <Icon name='square-outline' color={tintColor} size={25}/>
      )
    }
  },
  Multiple: {
    screen: Multiple,
    navigationOptions: {
      tabBarLabel: 'Multiple',
      tabBarIcon:({tintColor})=> (
        <Icon name='square' color={tintColor} size={25}/>
      )
    }
  },
  // Notifications: {
  //   screen: Notifications,
  //   navigationOptions: {
  //     tabBarLabel: 'Notifications',
  //     tabBarIcon:({tintColor})=> (
  //       <Icon name='notifications' color={tintColor} size={25}/>
  //     )
  //   }
  // },
  Toolbox: {
    screen: Toolbox,
    navigationOptions: {
      tabBarLabel: 'Toolbox',
      tabBarIcon:({tintColor})=> (
        <Icon name='cube' color={tintColor} size={25}/>
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon:({tintColor})=> (
        <Icon name='settings' color={tintColor} size={25}/>
      )
    }
  }
}, {
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
      initialRouteName: 'Toolbox',
    },
    drawerPosition: 'left',
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoure: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 320,
    contentOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#3F51B5',
      activeBackgroundColor: '#3F51B5',
      inactiveBackgroundColor: '#fff',
      itemsContainerStyle: {
        marginHorizontal: 10
      },
      itemStyle: {
        height: 40,
        border: 60
      },
      activeLabelStyle: {
        fontSize: 25,
        fontWeight: 'normal'
      },
      inactiveLabelStyle: {
        fontSize: 25,
        fontWeight: 'normal'
      }
    }
  });

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: {
    screen: DashboardDrawerNavigator,
    navigationOptions: () => ({
      header: null
    })
  }
})


const AppSwitchNavigator = createSwitchNavigator({
  App: {
    screen: DashboardStackNavigator
  }
});

const FourDresultAppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
  render() {
    return (
      <FourDresultAppContainer />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  drawerImage: {
    height: 150,
    width: 300
  }
});


