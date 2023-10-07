import { renderHook } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

import { useUserInfo } from '../useUserInfo';

const mockUser = {
  email: 'kj@gmail.com',
  displayName: 'jakar',
  uid: 'u007',
};

jest.mock('react-redux');

describe('useUserInfo', () => {
  it('should return current user name', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(mockUser);

    const { result } = renderHook(useUserInfo);

    expect(result.current.displayName).toBe('jakar');
  });

  it('should return current user info as an object', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(mockUser);

    expect(useUserInfo()).toEqual(mockUser);
  });
});
