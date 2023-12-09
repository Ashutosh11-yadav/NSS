import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from './screens/Authentication/SignUp'
// import Home from './screens/Home';
import Navigation from './Navigation/Navigation'
import MainTabNavigator from './Navigation/Navigation'

export default function App() {
  return (
  
      <SafeAreaView style={{flex:1}}>
        <Navigation/>
      </SafeAreaView>
     
    
  );
}

