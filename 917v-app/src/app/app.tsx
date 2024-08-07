'use client'
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from './store';
import Home from './page';

const AppWrapper = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default AppWrapper;
