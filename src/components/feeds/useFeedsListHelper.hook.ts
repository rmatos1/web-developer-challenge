import { useContext, useMemo } from "react";
import { FeedsContext } from "../../context";
import { IFeed } from "../../types";

interface IUseFeedsHelper {
    sortedFeeds: IFeed[];
    onDeleteFeed: (id: string) => void;
}

export const useFeedsHelper = (): IUseFeedsHelper => {

    const { feeds, setFeeds } = useContext(FeedsContext)

    const sortedFeeds = useMemo(() => {

        const sorted = [...feeds].sort((a, b) => {
            if (a.date && b.date) {
                return b.date.getTime() > a.date.getTime() ? -1 : 1;
            }
            return 0;
        });

        return sorted;

    }, [feeds])
  
    const handleDeleteFeedOnClick = (id: string) => {

        const updatedFeeds = feeds.filter((item: IFeed) => item.id !== id);

        setFeeds(updatedFeeds);
    }

    return {
        sortedFeeds,
        onDeleteFeed: handleDeleteFeedOnClick
    }
}