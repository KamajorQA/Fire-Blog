import { Layout, theme } from 'antd';
import { GiCampfire } from 'react-icons/gi';

import { useControlNavigation } from '../hooks/useControlNavigation';
import { useUserInfo } from '../hooks/useUserInfo';

import { MenuComponent } from './MenuComponent';
import { LogoutButton } from './LogoutButton';

const { Header } = Layout;

function HeaderComponent() {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { goHome } = useControlNavigation();

  const { displayName } = useUserInfo();

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        justifyContent: 'space-between',
        fontFamily: 'Great Vibes',
      }}
    >
      <section className="headerBox">
        <GiCampfire
          className="iconButton"
          style={{
            fontSize: '1.5rem',
            margin: '0 1rem',
            color: colorPrimary,
            cursor: 'pointer',
          }}
          onClick={goHome}
        />

        <MenuComponent />
      </section>

      <section
        className="headerBox"
        style={{
          color: 'white',
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <p
          style={{
            margin: 0,
          }}
        >
          Welcome, {displayName}
        </p>
        <LogoutButton />
      </section>
    </Header>
  );
}

export { HeaderComponent };
