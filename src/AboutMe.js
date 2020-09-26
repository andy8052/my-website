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
`
const Split = styled.div`
  width:90%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
`

class AboutMe extends React.Component {
  render() {
    return (
      <HeaderInfo>
        <Split>
          <h2>👋 Hi I'm Andy</h2>
          <h4>I'm a Smart Contracts Engineer @ <a href="https://makerdao.com/en/" target="_blank" rel="noopener noreferrer">MakerDAO</a></h4>
          <p>----------</p>
          <p>I spend most my time thinking about DeFi, the NBA, video games and streetwear</p>
          <p>I dabble in Daily Fantasy Basketball using a model that I made</p>
          <p>I play <a href="https://na.leagueoflegends.com/en/featured/events/teamfight-tactics" target="_blank" rel="noopener noreferrer">Teamfight Tactics</a> competitively with my current peak at rank 20 NA</p>
          <p>----------</p>
          <p>I do full stack development</p>
          <p>Currently I am focused on smart contracts</p>
          <p>Most recently I made <a href="https://syusd.cash/" target="_blank" rel="noopener noreferrer">syUSD.cash</a></p>
          <p>----------</p>
          <p>The best way to reach me is on <a href="https://twitter.com/andy8052" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          <p>See my code on <a href="https://github.com/andy8052" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p>Otherwise email me at andy8052(at)protonmail(dot)com</p>
        </Split>
      </HeaderInfo>
    );
  }
}

export default AboutMe
