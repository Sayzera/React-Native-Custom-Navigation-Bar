import AppNavigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </View>
  );
}
