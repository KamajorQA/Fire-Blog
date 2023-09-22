import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { LoadScreen } from '../components/LoadScreen';
import { useAuth } from '../hooks/useAuth';

function MainLayout() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(setUser(user));
  //     } else {
  //       dispatch(removeUser());
  //       navigate('/login');
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  const isLoading = useAuth();
  // useAuth(setIsLoading);
  // console.log('isLoading >>', isLoading);

  return (
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
  );
}

export { MainLayout };
