import { Outlet } from 'react-router-dom';
import { Layout, Alert } from 'antd';

import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { LoadScreen } from '../components/LoadScreen';
import { useAuth } from '../hooks/useAuth';
// const { ErrorBoundary } = Alert;

function MainLayout() {
  const isLoading = useAuth();

  return (
    // <ErrorBoundary
    //   description={'some custom error secription'}
    //   message={'somethinf went wrong'}
    // >
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {isLoading ? (
        <LoadScreen />
      ) : (
        <>
          <HeaderComponent />

          <Outlet />

          <FooterComponent />
        </>
      )}
    </Layout>
    // </ErrorBoundary>
  );
}

export { MainLayout };
