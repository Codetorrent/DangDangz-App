/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './Root';
import {name as appName} from './app.json';
import "@thirdweb-dev/react-native-compat";

AppRegistry.registerComponent(appName, () => Root);
