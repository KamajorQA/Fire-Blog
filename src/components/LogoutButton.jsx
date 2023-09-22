import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';

import { removeUser } from '../store/slices/userSlice';
import { auth } from '../firebase';

function LogoutButton() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signUserOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/login');
    });
  };

  return (
    <RiLogoutCircleLine
      className="iconButton"
      style={{
        fontSize: '1.2rem',
        cursor: 'pointer',
      }}
      onClick={signUserOut}
    />
  );
}

export { LogoutButton };
