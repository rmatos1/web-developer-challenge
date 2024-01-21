import { useContext } from "react";
import { FeedsContext } from "../../context";
import { IFeed } from "../../types";

interface IUseFeedsHelper {
    feeds: IFeed[];
    onDeleteFeed: (id: string) => void;
}

export const useFeedsHelper = (): IUseFeedsHelper => {

    const { feeds, setFeeds } = useContext(FeedsContext)

    const handleDeleteFeedOnClick = (id: string) => {

        const updatedFeeds = feeds.filter((item: IFeed) => item.id !== id);

        setFeeds(updatedFeeds);
    }

    return {
        feeds,
        onDeleteFeed: handleDeleteFeedOnClick
    }
}