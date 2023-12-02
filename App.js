import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Feedback from './screens/Feedback';

export default function App() {
  return (
    <SafeAreaView>
      <Feedback/>
    </SafeAreaView>
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
