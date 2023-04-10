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






