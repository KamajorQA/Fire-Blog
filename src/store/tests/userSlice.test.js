import { userReducer, setUser, removeUser } from '../slices/userSlice';

const matchingState = {
  email: null,
  displayName: null,
  uid: null,
};

describe('userSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = userReducer(undefined, { type: '' });

    expect(result).toEqual(matchingState);
  });
});
