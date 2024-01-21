import { describe, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { FeedForm } from '../feedForm';
import { TestComponent } from '../../testComponent';

const defaultFeedsContextValue = {
    feeds: [],
    setFeeds: jest.fn(),
}

const setup = (): JSX.Element => {

    return(
        <TestComponent feedsContextValue={defaultFeedsContextValue}>
            <FeedForm />
        </TestComponent>
    );
};

describe('<FeedForm />', () => {
  
  test('should render the specified input values', () => {
    render(setup());

    const name = "test";

    const inputName = screen.getByTestId('input-name') as HTMLInputElement;

    fireEvent.change(inputName, { target: { value: name } });

    expect(inputName.value).toBe(name);

    const msg = "test test test";

    const inputMsg = screen.getByTestId('input-msg') as HTMLTextAreaElement;

    fireEvent.change(inputMsg, { target: { value: msg } });

    expect(inputMsg.value).toBe(msg);
  });

  test("should call setFeeds on submit", () => {
    render(setup());

    const feedForm = screen.getByTestId("feed-form");

    fireEvent.submit(feedForm);

    expect(defaultFeedsContextValue.setFeeds).toHaveBeenCalled()
  })
});
