import * as React from 'react';
import {IconButton, MD3Colors, MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import Demo from "./src/screens/Demo";
import { Provider } from 'react-redux';
import store from './store'
import {room} from "./src/dto/radio.dto";
import Main from './src/Main';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export const App= ()=> {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
          <Main />
      </PaperProvider>
    </Provider>
  );
}