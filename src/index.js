import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';

import { store } from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#e84d1a',
          fontFamily: ['Marck Script', 'Great Vibes'],
        },
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
