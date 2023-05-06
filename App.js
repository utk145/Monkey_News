import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './App/Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './App/Navigation/HomeNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* This SafeAreaView works nicely only in ioS */}

      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>

      {/* <Home /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    padding: 20,
  },
});
