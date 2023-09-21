import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';

function MainLayout() {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <HeaderComponent />

      <Outlet />

      <FooterComponent />
    </Layout>
  );
}

export { MainLayout };
