import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { TestComponent } from '..';

const defaultProps = {
  children: <div data-testid="test-element" />,
};

const setup = (): JSX.Element => {
  return <TestComponent {...defaultProps} />;
};

describe('<TestComponent />', () => {
  test('should render correctly the defined children element', () => {
    render(setup());

    const children = screen.getByTestId('test-element');

    expect(children).toBeDefined();
  });
});
