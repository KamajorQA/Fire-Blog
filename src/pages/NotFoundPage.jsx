import { Image, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';

import Vincent from '../assets/img/Vincent.jpg';
import { TitleComponent } from '../components/TitleComponent';
import { useControlNavigation } from '../hooks/useControlNavigation';

function NotFoundPage() {
  const { goHome } = useControlNavigation();

  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>404</TitleComponent>

      <section className="flexCenter contentWrapper">
        <h1>Not Found</h1>
        <Image width={'50%'} src={Vincent} />

        <h3
          style={{
            maxWidth: '70%',
            textAlign: 'center',
          }}
        >
          Looks like this page is no longer of this world.
        </h3>
        <Button
          type="primary"
          style={{
            fontFamily: 'Great Vibes',
          }}
          onClick={goHome}
        >
          Go back to Home
        </Button>
      </section>
    </Content>
  );
}

export { NotFoundPage };
