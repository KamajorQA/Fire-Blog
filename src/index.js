import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';

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
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
