import React from 'react';
import ReactMarkdown from 'react-markdown';
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

class TV extends React.Component {
  render() {
    return (
      <HeaderInfo>
        <ReactMarkdown source={process.env.PUBLIC_URL+"/tv.md"}/>
      </HeaderInfo>
    );
  }
}

export default TV
