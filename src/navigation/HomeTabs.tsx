import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useEffect} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';
import {SettingScreen} from '../screens/SettingScreen';
import {
  CommonActions,
  DrawerActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const tabs = ['home', 'setting'];

const TabBar = (props: any) => {
  const {state, descriptors, navigation} = props;
  const {routes, index: activeRouteIndex} = state;
  const activeRoute = routes[activeRouteIndex];

  return (
    <View
      style={{
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{
          width: '25%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate(tabs[0])}>
        <Text
          style={{
            color:
              activeRoute?.name === tabs[0] ? 'rgba(237, 28, 36, 1)' : 'gray',
          }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '25%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate(tabs[1])}>
        <Text
          style={{
            color:
              activeRoute?.name === tabs[1] ? 'rgba(237, 28, 36, 1)' : 'gray',
          }}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const TabNavigators = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={tabs[0]}
        component={HomeScreen}
        options={{headerShown: false, title: 'Home'}}
      />

      <Tab.Screen
        name={tabs[1]}
        component={SettingScreen}
        options={{headerShown: false, title: 'Setting'}}
      />
    </Tab.Navigator>
  );
};

const HomeDrawer = (props: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        height: '100%',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <TouchableOpacity
        style={{width: '100%', padding: 10}}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'landing'}],
            }),
          );
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const HeaderLeft = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('open drawer');
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      <Text>Drawer </Text>
    </TouchableOpacity>
  );
};

export const HomeTabs = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <HomeDrawer {...props} />}
      screenOptions={{
        drawerStyle: {width: 200},
        headerShown: true,
        headerLeft: HeaderLeft,
        headerTitle: '',
      }}>
      <Drawer.Screen name="HomeBottomStack" component={TabNavigators} />
    </Drawer.Navigator>
  );
};
