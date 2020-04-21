import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from "react-redux"
import Clients from './components/Clients';
import { Container } from '@material-ui/core'
import { ToastProvider } from 'react-toast-notifications'

function App() {
  return (
      <Provider store={store}>
        <ToastProvider autoDismiss={true}>
          <Container maxWidth="lg">
            <Clients />
          </Container>
        </ToastProvider>
      </Provider>
  );
}

export default App;
