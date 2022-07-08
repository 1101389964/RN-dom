/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './origin/index';
// import App from './pages/index';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
