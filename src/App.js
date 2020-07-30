import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover';
import Popular from './components/Popular';
import MyList from './components/MyList';
import DiscoverBattle from './components/DiscoverBattle';
import PopularBattle from './components/PopularBattle';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Discover</Link></li>
              <li><Link to="/battle">DiscoverBattle</Link></li>
              <li><Link to="/pupolar/">Popular</Link></li>
              <li><Link to="/pupolar-battle/">PopularBattle</Link></li>
              <li><Link to="/my-list/">MyList</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <Discover />
            </Route>
            <Route path="/battle">
              <DiscoverBattle />
            </Route>
            <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route path="/my-list/">
              <MyList />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
