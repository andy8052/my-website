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
          <h4>Blockchain Engineer @ <a href="https://makerdao.com/en/" target="_blank">MakerDAO</a></h4>
          <h5><a href={process.env.PUBLIC_URL+"/resume.pdf"} target="_blank">Resume</a></h5>
      </HeaderInfo>
    );
  }
}

export default Header
