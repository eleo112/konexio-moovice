import React from 'react';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74fcec592c14695d692fe0a47f7b607d'
            fetch(url)
            .then(res => res.json())
            .then(json => {
                const movies = json.movies
                this.setState({
                    movies
                });
            });
    }

  render() {
    //   const {
    //       movies
    //   } = this.state;
    return(
      <div>popular</div>
    );
  }
}

export default Popular;