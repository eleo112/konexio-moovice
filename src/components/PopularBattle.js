import React from 'react';
import Card from './movie/Card';

class PopularBattle extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };
    
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }

  saveToLocalStorage(movieId) {

  }
  
  render() {
    return(
      <div>
        <h1>Popular Battle</h1>
        <div className="row">
          <div className="col-6">
            <Card 
              {...movie1}
              onClick={this.onClickMovie}/>
          </div>
          <div className="col-6">
            <Card
              {...movie2} />
          </div>
        </div>
      </div>
    );
  }
}

export default PopularBattle;