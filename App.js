import * as React from 'react';
import {IconButton, MD3Colors, MD3LightTheme as DefaultTheme, PaperProvider, MD3DarkTheme} from 'react-native-paper';
import Demo from "./src/screens/Demo";
import {Player} from "./src/screens/Player";
import { Provider } from 'react-redux';
import store from './store'
import {room} from "./src/dto/radio.dto";
import Main from './src/Main';

const theme = MD3DarkTheme;

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
          <Main />
      </PaperProvider>
    </Provider>
  );
}
