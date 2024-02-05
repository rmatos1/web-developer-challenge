import { useContext, useState, useEffect } from "react";
import { FeedsContext } from "../../context";
import { IFeed } from "../../types";

interface IUseFeedsHelper {
    feedsList: IFeed[];
    onDeleteFeed: (id: string, index: number) => void;
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

    const handleDeleteFeedOnClick = async (id: string, index: number) => {

        document.querySelector(`#feed${index}`)?.classList.add("deleted-feed");

        await new Promise(resolve => setTimeout(resolve, 350));

        const filteredFeeds = feeds.filter((item: IFeed) => item.id !== id);

        setFeeds(filteredFeeds);
    }

    return {
        feedsList,
        onDeleteFeed: handleDeleteFeedOnClick,
    }
}