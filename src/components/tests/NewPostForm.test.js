import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as routerHooks from 'react-router-dom';

import { NewPostForm } from '../NewPostForm';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('react-redux');
jest.mock('react-router-dom');

const mockUser = {
  email: 'kj@gmail.com',
  displayName: 'jakar',
  uid: 'u007',
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedUseNavigate = jest.spyOn(routerHooks, 'useNavigate');

describe('NewPostForm', () => {
  it('should render NewPostForm component', () => {
    mockedSelector.mockReturnValue(mockUser);
    const navigate = jest.fn();
    mockedUseNavigate.mockResolvedValue(navigate);

    const view = render(<NewPostForm />);

    expect(view).toMatchSnapshot();
  });

  it('should render "submit" and "reset" buttons inside form', () => {
    mockedSelector.mockReturnValue(mockUser);
    const navigate = jest.fn();
    mockedUseNavigate.mockReturnValue(navigate);

    render(<NewPostForm />);

    const resetButton = screen.getByRole('button', { name: /reset/i });
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(resetButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
