import React from 'react';
function Topic(props){
  console.log(props);
  // console.log(props.match.params)
  return (
    <h1>You chose a {props.match.params.topicName}</h1>
  )
}

export default Topic;