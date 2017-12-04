import React from 'react';

function Home(props){
  var teams = props.teams.map((team, index)=>{
    return (
      <li>{team}</li>
    )
  });
  return (
    <div>
      <h1>Welcome to my {props.title}</h1>
      <p>the top team in the NFL are: </p>
      {teams}
    </div>
  )
}
export default Home;