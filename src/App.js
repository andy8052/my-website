import React from 'react';
import styled from 'styled-components';

import AboutMe from './AboutMe';

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
        <Main>
          <AboutMe/>
        </Main>
    );
  }
}

export default App
