import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
  } from 'react';
  import { IFeed } from '../types';
  
export interface IFeedsContext {
    feeds: IFeed[];
    setFeeds: Dispatch<SetStateAction<IFeed[]>>;
}

interface IFeedProvider {
    children: ReactNode;
    customValue?: IFeedsContext;
}

export const FeedsContext = createContext<IFeedsContext>({
    feeds: [],
    setFeeds: () => null
})
  
export const FeedProvider = ({ children, customValue }: IFeedProvider) => {

    const [feeds, setFeeds] = useState<IFeed[]>([]);
  
    return (
      <FeedsContext.Provider
        value={{ feeds, setFeeds, ...customValue }}
      >
        {children}
      </FeedsContext.Provider>
    );
}
  
  
  