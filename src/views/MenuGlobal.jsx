import React from 'react';
import ExternalContainer from './pages/ExternalContainer'
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItalyInfo from './pages/ItalyInfo';

class MenuGlobal extends React.Component {

    render() {
        return(
            <Router>
      <Menu>
        <Menu.Item
          name='home'
        ><Link to="/covid-data">Home</Link>
        </Menu.Item>

        <Menu.Item
          name='italy-data'
        ><Link to="/covid-data/italy">Italy info</Link>
        </Menu.Item>

      </Menu>
      <Switch>
          <Route exact path="/covid-data" children={
              <ExternalContainer></ExternalContainer>
          }>
          </Route>
          <Route path="/covid-data/italy">
            <ItalyInfo></ItalyInfo>
          </Route>
        </Switch>
    
    </Router>
        )
    }
}

export default MenuGlobal;