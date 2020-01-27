import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'LoginScreen',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('../../icon/home-color.png')
              }
            }
          }
        },
        {
          component: {
            name: 'SignupScreen',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign Up',
                icon: require('../../icon/category-color.png')
              }
            }
          }
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
        stack: {
          id: 'App',
        children: [
            {
                component: {
                    name: 'HomeScreen',
                }
            }
        ],
        }
    }
});
