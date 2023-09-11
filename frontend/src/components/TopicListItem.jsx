import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  // console.log("TopicListItemPROPS", props)
  return (
    <div className="topic-list__item">
      <span className="topic-list__item span"> {props.topic.title} </span>
    </div>
  );
};

export default TopicListItem;

