import { Spin, Layout } from 'antd';

import { TitleComponent } from '../components/TitleComponent';
const { Content } = Layout;

function LoadScreen() {
  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Loading</TitleComponent>

      <main className="flexCenter contentWrapper">
        <Spin />
      </main>
    </Content>
  );
}

export { LoadScreen };
