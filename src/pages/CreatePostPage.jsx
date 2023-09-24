import { Button, Col, Layout, Row } from 'antd';

import { TitleComponent } from '../components/TitleComponent';
import { useControlNavigation } from '../hooks/useControlNavigation';
import { NewPostForm } from '../components/NewPostForm';
const { Content } = Layout;

function CreatePostPage() {
  const { goHome } = useControlNavigation();

  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Type your new Post</TitleComponent>

      <main className="contentWrapper">
        <Row justify="center" gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
          <Col span={12}>
            <NewPostForm />
          </Col>
        </Row>
      </main>
      <Button
        type="primary"
        style={{
          fontFamily: 'Great Vibes',
        }}
        onClick={goHome}
      >
        &#10094; Go back to Home
      </Button>
    </Content>
  );
}

export { CreatePostPage };
