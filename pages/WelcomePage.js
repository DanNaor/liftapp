import { StyleSheet,  View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function WelcomePage({navigation}) {
  return (
    <View style={styles.WelcomePage}>
      <>hi this is WelcomePage</>
      <button 
      title='LETS GO!'
      onClick={()=> navigation.navigate('ChooseProgramPage')}> 
      </button>
    </View>
  );
}

const styles = StyleSheet.create({
  WelcomePage: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
