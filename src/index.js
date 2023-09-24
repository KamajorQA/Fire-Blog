import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';

import { store } from './store';
import App from './App';
import { ErrorFallback } from './components/ErrorFallback';
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
        components: {
          Form: {
            itemMarginBottom: 12,
          },
        },
      }}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </ConfigProvider>
  </React.StrictMode>
);
