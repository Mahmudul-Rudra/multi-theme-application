//import * as ReactDOM from 'react-dom/client';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
