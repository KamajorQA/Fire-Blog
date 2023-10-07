import { render, screen } from '@testing-library/react';
import { useErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '../ErrorFallback';

jest.mock('react-error-boundary');

describe('ErrorFallback', () => {
  test('should create ErrorFallback component', () => {
    useErrorBoundary.mockReturnValue({
      resetBoundary: () => {},
    });

    const { asFragment } = render(<ErrorFallback />);

    expect(asFragment(<ErrorFallback />)).toMatchSnapshot();
  });

  it('should render "h1" element with error text', () => {
    useErrorBoundary.mockReturnValue({
      resetBoundary: () => {},
    });
    render(<ErrorFallback />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'An error occured!'
    );
  });

  it('should render "button" element', () => {
    useErrorBoundary.mockReturnValue({
      resetBoundary() {},
    });
    render(<ErrorFallback />);

    const button = screen.getByText(
      (content, element) => element.tagName.toLowerCase() === 'button'
    );

    expect(button).toBeInTheDocument();
  });

  test('should render "button" element with text "arise"', () => {
    useErrorBoundary.mockReturnValue({
      resetBoundary() {},
    });
    render(<ErrorFallback />);

    expect(screen.getByRole('button')).toHaveTextContent(/arise/i);
  });
});
