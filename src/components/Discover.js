import React from 'react';
import Card from './movie/Card';

class Discover extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const url = "api movie";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const movies = data.results;
      this.setState({
        movies
      });
    });
  }

  render() {
    if (this.state.movies.length === 0) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return(
      <div>
        <h1>Discover</h1>
        <div>
          {this.state.movies.map((movie) => {
            return (
              <Card 
              key={movie.id}
                {...movie} />
              // <div>
              //   {movie.title}
              // </div>
            );
          })}
        </div>
        </div>
    );
  }
}

export default Discover;