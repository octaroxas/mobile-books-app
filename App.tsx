// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import * as Font from 'expo-font';

// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
    
//     <View style={styles.container}>

//       <Text>Ola</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationRoutes from './src/routes/ApplicationRoutes';


export default function App() {
  return (
    <AuthProvider>
         <NavigationContainer>
          <ApplicationRoutes />
        </NavigationContainer>
      </AuthProvider >

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






