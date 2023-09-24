import { useSelector } from 'react-redux';

function useUserInfo() {
  const { email, displayName, uid } = useSelector((state) => state.userReducer);

  return {
    email,
    displayName,
    uid,
  };
}

export { useUserInfo };
