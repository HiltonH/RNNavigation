import { Navigation } from 'react-native-navigation';

import AuthLoading from './AuthLoading';
import ChangeScreen from './ChangeScreen';
import Config from './config.js';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import RecipeScreen from './RecipeScreen';
import SettingsScreen from './SettingsScreen';

Navigation.registerComponent('AuthLoading', () => AuthLoading);
Navigation.registerComponent('ChangeScreen', () => ChangeScreen);
Navigation.registerComponent('Config', () => Config);
Navigation.registerComponent('LoginScreen', () => LoginScreen);
Navigation.registerComponent('SignupScreen', () => SignupScreen);
Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('RecipeScreen', () => RecipeScreen);
Navigation.registerComponent('SettingsScreen', () => SettingsScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'AuthLoading',
        }
      },
    });
  });
