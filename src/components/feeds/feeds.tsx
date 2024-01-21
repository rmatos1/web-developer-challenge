import { FeedsContainer, FeedSectionTitle, EmptyFeeds, FeedsList, FeedCard, FeedTextContainer, FeedAuthorLabel, FeedAuthorName, DeleteButton } from "./feeds.styles";
import { StyledText, FeedImg } from "../styledComponents";
import { useFeedsHelper } from "./useFeedsListHelper.hook";
import { IFeed } from "../../types";

export const Feeds = () => {

    const { feeds, onDeleteFeed } = useFeedsHelper();

    return(
        <FeedsContainer>

            <FeedSectionTitle>Feed</FeedSectionTitle>

            {
                feeds.length ? (
                    <FeedsList>
                        {
                            feeds.map((feed: IFeed) => (
                                <FeedCard key={feed.id} data-testid="feed-card">

                                    <DeleteButton onClick={() => onDeleteFeed(feed.id || "")} data-testid="delete-button">x</DeleteButton>

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
                        <StyledText>Não há feed adicionado neste momento. Você pode preencher o formulário e adicione o primeiro!</StyledText>
                    </EmptyFeeds>
                )
            }

        </FeedsContainer>
    )
}