import { Menu } from 'antd';
import { GiCampfire } from 'react-icons/gi';
import { SiSparkpost } from 'react-icons/si';
import { IoIosContacts } from 'react-icons/io';
import { SiMariadbfoundation } from 'react-icons/si';

import { useControlNavigation } from '../hooks/useControlNavigation';

function MenuComponent() {
  const { highlightActiveLink, goToChosenPage } = useControlNavigation();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['/']}
      selectedKeys={highlightActiveLink()}
      items={[
        {
          key: '/',
          label: 'Home',
          icon: <GiCampfire />,
        },
        {
          key: 'createpost',
          label: 'Create New Post',
          icon: <SiSparkpost />,
        },
        {
          key: 'contacts',
          label: 'Contacts',
          icon: <IoIosContacts />,
        },
        {
          key: 'login',
          label: 'Login',
          icon: <SiMariadbfoundation />,
        },
      ]}
      onClick={goToChosenPage}
    />
  );
}

export { MenuComponent };
