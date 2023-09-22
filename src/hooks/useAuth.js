import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase';
import { removeUser, setUser } from '../store/slices/userSlice';

function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(removeUser());
        navigate('/login');
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [dispatch, navigate]);

  return isLoading;
}

export { useAuth };
