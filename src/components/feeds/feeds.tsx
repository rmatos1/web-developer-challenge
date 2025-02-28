import { FeedsContainer, FeedSectionTitle, EmptyFeeds, FeedsList, FeedCard, FeedTextContainer, FeedAuthorLabel, FeedAuthorName, DeleteFeed } from "./feeds.styles";
import { StyledText, FeedImg, Icon } from "../styledComponents";
import { useFeedsHelper } from "./useFeedsListHelper.hook";
import { IFeed } from "../../types";
import { icons } from "../../assets";

export const Feeds = () => {

    const { feedsList, onDeleteFeed } = useFeedsHelper();

    return(
        <FeedsContainer>

            <FeedSectionTitle>Feed</FeedSectionTitle>

            {
                feedsList.length ? (
                    <FeedsList>
                        {
                            feedsList.reverse().map((feed: IFeed, index) => (
                                <FeedCard key={feed.id} data-testid="feed-card" className={feed.status} id={`feed${index}`}>

                                    {
                                        feed.status !== "deleted-feed" && (
                                            <DeleteFeed onClick={() => onDeleteFeed(feed.id || "", index)} data-testid="delete-feed">
                                                <Icon alt="delete-feed" src={icons.deleteFeed} />
                                            </DeleteFeed>
                                        )
                                    }
                                    
                                    <FeedImg  alt="" src={feed.img} />

                                    <FeedTextContainer>

                                        <StyledText>{feed.msg}</StyledText>

                                        <div>
                                            <FeedAuthorLabel>Enviado por</FeedAuthorLabel>

                                            <FeedAuthorName>{feed.name}</FeedAuthorName>
                                        </div>

                                    </FeedTextContainer>

                                </FeedCard>
                            ))
                        }
                    </FeedsList>
                ) : (
                    <EmptyFeeds data-testid="empty-feeds">
                        <StyledText>Não há feed adicionado neste momento. Você pode preencher o formulário e adicionar o primeiro!</StyledText>
                    </EmptyFeeds>
                )
            }

        </FeedsContainer>
    )
}