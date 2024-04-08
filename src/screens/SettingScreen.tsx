import {Text, View} from 'react-native';

export const SettingScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text style={{fontSize: 30}}>Settings Page</Text>
    </View>
  );
};
