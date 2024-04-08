import {ActivityIndicator, Button, Image, Text, View} from 'react-native';
import {useGithubUser} from '../api/fetchData';
import {useRandomDog} from '../api/fetchDogApi';

export const HomeScreen = () => {
  const {isFetching, data, refetch} = useRandomDog();

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text style={{fontSize: 30}}>Home Page</Text>

      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <View>
          {data && (
            <Image src={data?.message} style={{width: 200, height: 200}} />
          )}
          <Button
            title="Get me another dog!"
            onPress={() => {
              refetch();
            }}
          />
        </View>
      )}
    </View>
  );
};
