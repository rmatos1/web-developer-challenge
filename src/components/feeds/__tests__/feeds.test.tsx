import { describe, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Feeds } from '../feeds';
import { TestComponent } from '../../testComponent';
import { feedTest } from '../../../constants';
import { IFeedsContext } from '../../../context';

const defaultFeedsContextValue = {
    feeds: [],
    setFeeds: jest.fn(),
}

const setup = (feedsContextValue?: IFeedsContext): JSX.Element => {

    return(
        <TestComponent feedsContextValue={feedsContextValue || defaultFeedsContextValue}>
            <Feeds />
        </TestComponent>
    );
};

describe('<Feeds />', () => {
  test('should render no feeds', () => {
    render(setup());

    const emptyFeeds = screen.getByTestId('empty-feeds');

    expect(emptyFeeds).toBeDefined();
  });

  test('should render a list with one feed', () => {
    render(setup({ ...defaultFeedsContextValue, feeds: [feedTest] }));

    const feedCards = screen.getAllByTestId('feed-card');

    expect(feedCards.length).toBe(1);
  });

  test('should call setFeeds on click', () => {
    render(setup({ ...defaultFeedsContextValue, feeds: [feedTest] }));

    const deleteButton = screen.getAllByTestId('delete-button');

    fireEvent.click(deleteButton[0]);

    expect(defaultFeedsContextValue.setFeeds).toHaveBeenCalled()
  });
});
