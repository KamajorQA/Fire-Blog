import { useSelector } from 'react-redux';

function useUserInfo() {
  const { email, displayName, id } = useSelector((state) => state.userReducer);

  return {
    // isAuthenticated: !!email,
    email,
    displayName,
    id,
  };
}

export { useUserInfo };
