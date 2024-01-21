import { describe, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';

import { ReactNode } from 'react';
import { FeedsContext, IFeedsContext } from '..';
import { TestComponent } from '../../components';
import { feedTest} from '../../constants';

const testElement: ReactNode = <div data-testid="test-element" />;

const testConsumerContext = (
  children: (value: IFeedsContext) => ReactNode
) => {
  return (
    <FeedsContext.Consumer>
      {children}
    </FeedsContext.Consumer>
  );
};

const setup = (children: ReactNode): JSX.Element => {
  return <TestComponent>{children}</TestComponent>;
};

describe('<ConfirmedBookingsProvider />', () => {
  test('should render the defined children element', () => {
    render(setup(testElement));

    const children = screen.getByTestId('test-element');

    expect(children).toBeDefined();
  });

  test('should render the specified feeds on click', () => {
    const context = testConsumerContext((value) => (
      <button
        onClick={() =>
          value.setFeeds((prevData) => [
            ...prevData,
            feedTest
          ])
        }
        data-testid="feed-button"
      >
        {JSON.stringify(value.feeds)}
      </button>
    ));

    render(setup(context));

    const feedButton = screen.getByTestId('feed-button');

    expect(feedButton.textContent).toBe(`[]`);

    fireEvent.click(feedButton);

    expect(feedButton.textContent).toBe(
      `[${JSON.stringify(feedTest)}]`
    );
  });
});
