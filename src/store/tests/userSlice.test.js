import { userReducer, setUser, removeUser } from '../slices/userSlice';

const matchingState = {
  email: null,
  displayName: null,
  uid: null,
};

const mockUser = {
  email: 'kj@gmail.com',
  displayName: 'jakar',
  uid: 'u007',
};

describe('userSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = userReducer(undefined, { type: '' });

    expect(result).toEqual(matchingState);
  });

  it('should set current user to the store with "setUser" action', () => {
    const action = { type: setUser.type, payload: mockUser };

    const result = userReducer(matchingState, action);

    expect(result.displayName).toBe('jakar');
    expect(result.email).toBe('kj@gmail.com');
    expect(result.uid).toBe('u007');
  });

  it('should set user state to it\'s initial value with "removeUser" action', () => {
    const user = mockUser;
    const action = { type: removeUser.type };

    const result = userReducer(user, action);

    expect(result).toEqual(matchingState);
  });
});
