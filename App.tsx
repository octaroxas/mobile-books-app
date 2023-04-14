import AuthProvider from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationRoutes from './src/routes/ApplicationRoutes';
import AppLoading from 'expo-app-loading';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import GirlBooks from './src/components/animation-components/GirlBooks';
import * as Font from 'expo-font';


export default function App() {
  const [loaded] = Font.useFonts({
    Lobster_400Regular: require('./assets/fonts/lobster_regular.ttf'),

    // Roboto_400: require('./src/assets/fonts/roboto_400.ttf'),
    // Roboto_700: require('./src/assets/fonts/roboto_700.ttf'),
  });


  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        <ApplicationRoutes />
      </NavigationContainer>
    </AuthProvider >
  );
}







