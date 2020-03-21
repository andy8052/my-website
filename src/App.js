import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

import AboutMe from './AboutMe';
import TV from './TV';

const Main = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Space Mono', monospace;
`

class App extends React.Component {

  render() {
    return (
      <Router>
        <Main>
          <Switch>
            <Route path="/tv">
              {/* <TV/> */}
            </Route>
            <Route path="/">
              <AboutMe/>
              <TV/>
            </Route>
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default App
