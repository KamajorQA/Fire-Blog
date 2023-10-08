import { fireEvent, render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as routerHooks from 'react-router-dom';
import * as firebaseMethods from 'firebase/auth';

import { LogoutButton } from '../LogoutButton';

jest.mock('react-redux');
jest.mock('react-router-dom');
jest.mock('firebase/auth');
jest.mock('react-icons/ri');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedUseNavigate = jest.spyOn(routerHooks, 'useNavigate');
const mockedSignOut = jest.spyOn(firebaseMethods, 'signOut');

describe('LogoutButton', () => {
  it('should render "LogoutButton" component', () => {
    mockedDispatch.mockResolvedValue(jest.fn);
    mockedUseNavigate.mockResolvedValue(jest.fn);
    mockedSignOut.mockResolvedValue(jest.fn);

    const view = render(<LogoutButton />);

    expect(view).toMatchSnapshot();
  });

  it('should call signUserOut function on button click', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    const navigate = jest.fn();
    mockedUseNavigate.mockReturnValue(navigate);

    const signOut = mockedSignOut.mockResolvedValue();

    render(<LogoutButton />);

    const btnElement = screen.getByRole('button');
    fireEvent.click(btnElement);

    expect(signOut).toHaveBeenCalled();

    fireEvent.click(btnElement);

    expect(signOut).toBeCalledTimes(2);
  });
});
