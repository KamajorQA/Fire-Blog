import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { signInWithPopup } from 'firebase/auth';

import { auth, provider } from '../firebase';
import { setUser } from '../store/slices/userSlice';
import { TitleComponent } from '../components/TitleComponent';
const { Content } = Layout;

function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            displayName: user.displayName,
          })
        );
        navigate('/');
      })
      .catch((error) => alert(error));
  };

  const goHome = () => navigate('/');

  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Login</TitleComponent>

      <main className="flexCenter contentWrapper">
        <h2>Sign In With Google to Continue</h2>
        <Button
          type="primary"
          style={{
            fontFamily: 'Great Vibes',
          }}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </main>
      <Button
        type="primary"
        style={{
          fontFamily: 'Great Vibes',
        }}
        onClick={goHome}
      >
        Go to main Page
      </Button>
    </Content>
  );
}

export { LoginPage };
