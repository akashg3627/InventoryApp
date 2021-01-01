import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import store from './store/store';
import GroupListScreen from './screens/GroupListScreen';
import InventoryListScreen from './screens/InventoryListScreen';
import InventoryDetailsScreen from './screens/InventoryDetailsScreen';
import DrawerContent from './screens/DrawerContent';
import colors from './constants/colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='GroupList' component={GroupListScreen} />
      <Stack.Screen name='InventoryList' component={InventoryListScreen} />
      <Stack.Screen
        name='InventoryDetails'
        component={InventoryDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={Root}
          drawerContent={(props) => <DrawerContent {...props} />}
          drawerStyle={{
            backgroundColor: colors.secondary,
          }}
        >
          <Drawer.Screen name='Groups' component={Root} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
