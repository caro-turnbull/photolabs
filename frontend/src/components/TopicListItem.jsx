import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {topic, filterByTopics} = props
  return (
    <div className="topic-list__item">
      <span 
        className="topic-list__item span" 
        onClick={() => filterByTopics(topic.id)} 
        > 
        {topic.title} 
        </span>
    </div>
  );
};

export default TopicListItem;

