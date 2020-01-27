import { Navigation } from 'react-native-navigation';

import AuthLoading from './AuthLoading';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SignupScreen from './SignupScreen';
import ChangeScreen from './ChangeScreen';
import RecipeScreen from './RecipeScreen';
import Config from './config.js';


Navigation.registerComponent('AuthLoading', () => AuthLoading);
Navigation.registerComponent('LoginScreen', () => LoginScreen);
Navigation.registerComponent('RecipeScreen', () => RecipeScreen);
Navigation.registerComponent('ChangeScreen', () => ChangeScreen);
Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('SignupScreen', () => SignupScreen);
Navigation.registerComponent('Config', () => Config);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'AuthLoading',
        }
      },
    });
  });
