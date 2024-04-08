import {
  CommonActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

export const LandingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text style={{fontSize: 30}}>Landing Page</Text>
      <Button
        title="Go To Home"
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'home'}],
            }),
          );
        }}
      />
    </View>
  );
};
