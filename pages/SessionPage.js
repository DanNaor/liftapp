import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function SessionPage() {
  return (  
    <View style={styles.SessionPage}>
   <text >hi this is SessionPage</text>
    </View>
  );
}

const styles = StyleSheet.create({
    SessionPage: {
    width:"100%",
    height:"100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SessionPage;