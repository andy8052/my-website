import React from 'react';
import styled from 'styled-components';

const HeaderInfo = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class Header extends React.Component {

  render() {
    return (
      <HeaderInfo>
          <h2>👋 Hi I'm Andy</h2>
          <h4>I'm a Smart Contracts Engineer @ <a href="https://makerdao.com/en/" target="_blank" rel="noopener noreferrer">MakerDAO</a></h4>
      </HeaderInfo>
    );
  }
}

export default Header
