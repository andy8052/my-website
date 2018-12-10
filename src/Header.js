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
          <h2>Andy Chorlian</h2>
          <h4>Full Stack Solidity Dev</h4>
      </HeaderInfo>
    );
  }
}

export default Header
