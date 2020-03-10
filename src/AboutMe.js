import React from 'react';
import styled from 'styled-components';

const HeaderInfo = styled.div`
  width:90%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const Split = styled.div`
  width:80%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class AboutMe extends React.Component {
  render() {
    console.log("url:" + process.env.PUBLIC_URL)
    return (
      <HeaderInfo>
        <Split>
          <p>----------</p>
          <p>I spend most my time thinking about blockchain, the NBA, video games and streetwear.</p>
          <p>I am learning more about cryptography, go and data analytics.</p>
          <p>----------</p>
          <p>I do full stack development. Currently I am focused on smart contracts, formal verification and tooling.</p>
          <p>----------</p>
          <p>I am always interested in talking about NBA stats. In my free time I dabble in Daily Fantasy Basketball and have my own model for this.</p>
          <p>I play <a href="https://na.leagueoflegends.com/en/featured/events/teamfight-tactics" target="_blank" rel="noopener noreferrer">Teamfight Tactics</a> competitively with my current peak at rank 50.</p>
          <p>----------</p>
          <p>The best way to reach me is on <a href="https://twitter.com/andy8052" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
          <p>Otherwise email me at andychorlian(at)gmail(dot)com.</p>
          <p>Here is my <a href={process.env.PUBLIC_URL+"/resume.pdf"} target="_blank" rel="noopener noreferrer">Resume</a>.</p>
          </Split>
      </HeaderInfo>
    );
  }
}

export default AboutMe
