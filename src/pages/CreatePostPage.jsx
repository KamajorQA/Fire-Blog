import { Button, Layout } from 'antd';

import { TitleComponent } from '../components/TitleComponent';
import { useControlNavigation } from '../hooks/useControlNavigation';
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

      <main className="contentWrapper">Create Post</main>
      <Button
        type="primary"
        style={{
          fontFamily: 'Great Vibes',
        }}
        onClick={goHome}
      >
        Go back to Home
      </Button>
    </Content>
  );
}

export { CreatePostPage };
