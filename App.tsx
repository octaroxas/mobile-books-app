import AuthProvider from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationRoutes from './src/routes/ApplicationRoutes';
import { useFonts } from 'expo-font';
import GirlBooks from './src/components/animation-components/GirlBooks';


export default function App() {
  const [loaded] = useFonts({
    "Lobster_400Regular": require('./assets/fonts/lobster_regular.ttf'),
  });

  if (!loaded) {
    return <GirlBooks />;
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        <ApplicationRoutes />
      </NavigationContainer>
    </AuthProvider >
  );
}







