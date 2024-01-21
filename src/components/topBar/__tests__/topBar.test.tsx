import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { TopBar } from '../topBar';

describe('<TopBar />', () => {
  test('should render correctly the specified texts', () => {
    render(<TopBar />);

    const topBarLogo = screen.getByTestId('top-bar-logo');

    expect(topBarLogo).toBeDefined();

    const topBarSubtitle = screen.getByTestId('top-bar-subtitle');

    expect(topBarSubtitle).toBeDefined();
  });
});
