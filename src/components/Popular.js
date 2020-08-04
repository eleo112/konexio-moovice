import React from 'react';
import Api from '../utils/Api';
// import Discover from './Discover';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
      Api.getReleaseMovies()
        .then((movies) => {
          this.setState({
            movies
          })
        });
    }

    onClickMovie(movieId) {

    }

  render() {
    //   const {
    //       movies
    //   } = this.state;
    return(
      <div>
        <h1>Popular</h1>
      </div>
    );
  }
}

export default Popular;