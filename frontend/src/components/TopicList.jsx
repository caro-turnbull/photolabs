import React from "react";

import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";
// import topics from "mocks/topics";

const TopicList = (props) => {
  const { topics, filterByTopics} = props
  return (
    <div className="top-nav-bar__topic-list">
        {topics.map(topic => (
          <TopicListItem 
            key={topic.id} 
            topic={topic}
            filterByTopics={filterByTopics}
            />
        ))}
    </div>
  )
}

export default TopicList;
