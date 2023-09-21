import { Layout } from 'antd';

import { Socials } from './Socials';

const { Footer } = Layout;

function FooterComponent() {
  return (
    <Footer
      style={{
        flexDirection: 'column',
        fontFamily: 'Great Vibes',
      }}
      className={'flexCenter'}
    >
      <span>Kamajor © 2023</span>
      <Socials />
    </Footer>
  );
}

export { FooterComponent };
