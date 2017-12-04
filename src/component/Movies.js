import React, {Component} from 'react';



class Movies extends Component{
  componentDidMount(){
    var url ='https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman'
  }
  render(){
    return(
      <h1>Movies Page</h1>
    )
  }
}
export default Movies;