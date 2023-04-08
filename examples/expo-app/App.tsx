import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useState} from "react";
import { AnimationTypes, SpringLoader } from 'spring-loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationSpring, setIsAnimationSpring] = useState(true);
  const gradientsArray: Array<string> = [
    '#00ADD3',
    '#D4B900',
    '#E68244',
    '#C95FA2',
    '#FF5F57',
    '#3D4BF7',
    '#34B3EA'
  ];

  return (
    <>
    <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <SpringLoader 
            animationType={
              isAnimationSpring? AnimationTypes.Spring : AnimationTypes.Wave
            } 
            width={ 300 } 
            height={ 150 } 
            strokeWidth={ 30 } 
            gradientsArray={ gradientsArray } 
            loading={ isLoading }
          />
        </View>
        <View style={{flex: 1}}>
          <View style={{ flexDirection: 'row', flex: 1, width: '100%'}}>
            <View style={{ flex: 1, width: '33%'}}>
              <Text>Wave</Text>
            </View>
            <View style={{ flex: 1, width: '33%'}}>
              <Switch
                trackColor={{false: '#81b0ff', true: '#D4B900'}}
                ios_backgroundColor={'#81b0ff'}
                value={ isAnimationSpring }
                onValueChange={ ()=> setIsAnimationSpring(!isAnimationSpring) }
              />
            </View>
            <View style={{ flex: 1, width: '33%'}}>
              <Text>Spring</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', flex: 1, width: '100%'}}>
              <View style={{ flex: 1, width: '33%'}}>
                <Text>Loading</Text>
              </View>
              <View style={{ flex: 1, width: '33%'}}>
                <Switch
                  value={ isLoading }
                  onValueChange={ ()=> setIsLoading(!isLoading) }
                />
              </View>
              <View style={{ flex: 1, width: '33%'}}>
              </View>
          </View>
        </View>
    </View>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
