import { ReactNode } from 'react';
import { FeedProvider, IFeedsContext } from '../../context';

export interface ITestComponent {
    children: ReactNode;
    feedsContextValue?: IFeedsContext;
}

export const TestComponent = ({ children, feedsContextValue }: ITestComponent) => {
  return (
    <FeedProvider customValue={feedsContextValue}>
        {children}
    </FeedProvider>
  );
};
