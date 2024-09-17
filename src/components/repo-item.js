import styled from "styled-components";
import Language from "./language";
import Icon from "./icon";

const RepoItemsStyled = styled.div`
  /* border: 10px solid purple; */
  padding-block: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-block-end: 1px solid var(--grey);
  &:last-child {
    border-block-end: none;
  }
  .title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  .public {
    border: 1px solid var(--grey);
    padding-inline: 0.5rem;
    padding-block: 0.125rem;
    font: var(--caption-regular);
    border-radius: 0.5rem;
  }
  .description {
    margin: 0;
    font: var(--body2-regular);
  }
  .topicList {
    display: flex;
    gap: 0.25rem;
  }
  .topicItem {
    color: var(--primary);
    font: var(--caption-medium);
    background: #15223a;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    border-radius: 2rem;
  }
  .details {
    display: flex;
    gap: 1rem;
    font: var(--caption-regular);
  }
  .details-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--grey-1);
    & span::first-letter {
      text-transform: uppercase;
    }
  }
`;

function RepoItem(props) {
  const updateAt = new Date(props.updated_at);
  const today = new Date();
  const diffMilliseconds = updateAt - today;
  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
  const timeAgo = new Intl.RelativeTimeFormat("es").format(diffDays, "days");

  return (
    <RepoItemsStyled>
      <h3 className="title">
        <a href={props.html_url}>{props.name}</a>
        {!props.private ? <span className="public">Public</span> : null}
        {props.description ? (
          <p className="description">{props.description}</p>
        ) : null}
      </h3>

      {props.topics.length ? (
        <div className="topicList">
          {props.topics.map((item) => (
            <span className="topicItem">{item}</span>
          ))}
        </div>
      ) : null}

      <div className="details">
        {props.language ? <Language name={props.language} /> : null}
        <sapn className="details-item">
          <Icon name="star" />
          <span>{props.stargazers_count}</span>
        </sapn>

        <sapn className="details-item">
          <Icon name="branch" />
          <span>{props.forks_count}</span>
        </sapn>

        <sapn className="details-item">
          <span> {timeAgo} </span>
        </sapn>
      </div>
    </RepoItemsStyled>
  );
}

export default RepoItem;
