import { useContext, useState, useEffect } from "react";
import { FeedsContext } from "../../context";
import { IFeed } from "../../types";

interface IUseFeedsHelper {
    feedsList: IFeed[];
    onDeleteFeed: (id: string) => void;
}

export const useFeedsHelper = (): IUseFeedsHelper => {

    const { feeds, setFeeds } = useContext(FeedsContext)

    const [feedsList, setFeedsList] = useState<IFeed[]>([]);

    useEffect(() => {

        const updatedFeeds = feeds.map(feed => {

            const isOldFeed = feedsList.find(item => item.id === feed.id);

            return { ...feed, status: !isOldFeed ? "new-feed" : "" }
        })

        setFeedsList(updatedFeeds);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [feeds])

    const handleDeleteFeedOnClick = (id: string) => {

        const updatedFeeds = feeds.map(feed => ({ ...feed, status: feed.id === id ? "deleted-feed" : "" }))

        setFeedsList(updatedFeeds);

        setTimeout(() => {

            const filteredFeeds = feeds.filter((item: IFeed) => item.id !== id);

            setFeeds(filteredFeeds);

        }, 350)
    }

    return {
        feedsList,
        onDeleteFeed: handleDeleteFeedOnClick
    }
}