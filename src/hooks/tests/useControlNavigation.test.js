import { renderHook } from '@testing-library/react';
import * as routerHooks from 'react-router-dom';

import { useControlNavigation } from '../useControlNavigation';

jest.mock('react-router-dom');

const mockedUseNavigate = jest.spyOn(routerHooks, 'useNavigate');
const mockedUseLocation = jest.spyOn(routerHooks, 'useLocation');
describe('useControlNavigation', () => {
  it('should return defined "goHome" value', () => {
    mockedUseNavigate.mockReturnValue((path) => {
      alert(path);
    });
    mockedUseLocation.mockReturnValue({ pathname: 'path' });

    const { result } = renderHook(useControlNavigation);
    expect(result.current.goHome).toBeDefined();
  });

  it('should call useNavigate', () => {
    mockedUseNavigate.mockReturnValue((path) => {
      alert(path);
    });
    mockedUseLocation.mockReturnValue({ pathname: 'path' });

    renderHook(useControlNavigation);

    expect(mockedUseNavigate).toBeCalled();
  });

  it('should highlighActiveLink to return "createpost" path', () => {
    mockedUseNavigate.mockReturnValue((path) => {
      alert(path);
    });
    mockedUseLocation.mockReturnValue({ pathname: '/createpost' });

    const { result } = renderHook(useControlNavigation);

    expect(result.current.highlightActiveLink()).toEqual(['createpost']);
  });
});
