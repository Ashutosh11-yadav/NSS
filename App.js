import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TabScreen from './TabScreen';
import LogIn from './Screens/Authentication/LogIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from './Screens/Authentication/SignUp'
import StackNavigation from './Components/navigator/StackNavigation';




export default function App() {
  return (
  
      <View style={{flex:1}}>
        
      <StackNavigation/>

      </View>
        
    
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
