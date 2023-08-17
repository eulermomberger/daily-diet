import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Dashboard } from '@screens/Dashboard';
import { Form } from '@screens/Form';
import { Feedback } from '@screens/Feedback';
import { Preview } from '@screens/Preview';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='dashboard'
        component={Dashboard}
      />
      <Screen
        name='form'
        component={Form}
      />
      <Screen
        name='feedback'
        component={Feedback}
      />
      <Screen
        name='preview'
        component={Preview}
      />
    </Navigator>
  );
}
