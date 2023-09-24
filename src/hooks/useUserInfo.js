import { useSelector } from 'react-redux';

function useUserInfo() {
  const { email, displayName, uid } = useSelector((state) => state.userReducer);

  return {
    // isAuthenticated: !!email,
    email,
    displayName,
    uid,
  };
}

export { useUserInfo };
