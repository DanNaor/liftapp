import { StyleSheet,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseProgramPage from './pages/ChooseProgramPage';
import WelcomePage from './pages/WelcomePage';


const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="WelcomePage">
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="ChooseProgramPage" component={ChooseProgramPage} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
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

export default App;