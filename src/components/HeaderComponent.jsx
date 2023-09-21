import { Layout, theme } from 'antd';

import { GiCampfire } from 'react-icons/gi';

import { useControlNavigation } from '../hooks/useControlNavigation';

import { MenuComponent } from './MenuComponent';

const { Header } = Layout;

function HeaderComponent() {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { goHome } = useControlNavigation();

  return (
    <>
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
          <h3
            style={{
              margin: 0,
            }}
          >
            Fire Blog
          </h3>
        </section>
      </Header>

      {/* <Header
        style={{
          padding: 0,
          background: colorBgLayout,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FaPaw
          style={{
            fontSize: '1.5rem',
            margin: '0 1rem',
            color: colorPrimary,
            cursor: 'pointer',
          }}
          onClick={goHome}
        />


        <Button
          type="text"
          icon={collapsed ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          onClick={switchCollapse}
          style={{
            fontSize: '1rem',
            width: 64,
            height: 64,
            justifySelf: 'end',
          }}
        />
      </Header> */}
    </>
  );
}

export { HeaderComponent };
