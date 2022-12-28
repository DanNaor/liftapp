import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';

export default function ChooseProgramPage() {
  return (  
    <View style={styles.ChooseProgramPage}>
      <text >hi this is ChooseProgramPage</text>
    </View>
  );
}

const styles = StyleSheet.create({
    ChooseProgramPage: {
    width:"100%",
    height:"100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
