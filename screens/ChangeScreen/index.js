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
                icon: require('../../icon/area-color.png')
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
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'HomeScreen',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Home',
                icon: require('../../icon/home-color.png')
              }
            }
          }
        },
        {
          component: {
            name: 'RecipeScreen',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Recipe',
                icon: require('../../icon/category-color.png')
              }
            }
          }
        },
        {
          component: {
            name: 'SettingsScreen',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Settings',
                icon: require('../../icon/settings.png')
              }
            }
          }
        },
      ],
    }
  }
});

// export const goHome = () => Navigation.setRoot({
//   root: {
//         stack: {
//           id: 'App',
//         children: [
//             {
//                 component: {
//                     name: 'HomeScreen',
//                 }
//             }
//         ],
//         }
//     }
// });
