import { render } from '@testing-library/react';

import { BaseLink } from '../BaseLink';

describe('BaseLink', () => {
  it('should create BaseLink component', () => {
    const view = render(<BaseLink />);

    expect(view).toMatchSnapshot();
  });

  it('should create BaseLink with text matching "children" prop', () => {
    const view = render(<BaseLink>text</BaseLink>);

    expect(view.baseElement).toHaveTextContent(/text/i);
  });
});
