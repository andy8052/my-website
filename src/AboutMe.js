import React from 'react';
import styled from 'styled-components';
import me from './andy-lg.png';
import github from './Octocat.png';
import linkedin from './linkedin.png';
import twitter from './Twitter.png';
import instagram from './Instagram.png';
import gmail from './gmail.png';

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
  width:50%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const IconRow = styled.div`
  width:75%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const Icon = styled.div`
  width:20%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const GitIcon = styled.img`
  max-width: 80%;
  max-height: 50px;
`
class AboutMe extends React.Component {

  render() {
    console.log("url:" + process.env.PUBLIC_URL)
    return (
      <HeaderInfo>
        <Split>
          <img  src={me} alt="me!"/>
        </Split>
        <Split>
          <h3>About Me</h3>
          <p>I am a computer nerd and blockchain enthusiast. I graduated with a degree in Computer Engineering in 2016 from Villanova (go cats!).</p>
          <p>Over the last few years, I have taken a deep dive into blockchain and especially into Ethereum and Solidity development. I am passionate about decentralization and really excited about everything the space has to offer.</p>
          <p>
            I love sports and video games. In another life, I would love to work as a stats person in the NBA. I recently wrote a piece about&nbsp;
            <a href="https://medium.com/we-like-sports/a-deeper-look-into-nba-per-possession-statistics-e5b9be7950f6" target="_blank" rel="noopener noreferrer">NBA Pace</a>
            &nbsp;which I found really fun to research and write about.
          </p>
          <IconRow>
            <Icon>
                <a href="https://github.com/andy8052" target="_blank" rel="noopener noreferrer">
                  <GitIcon  src={github} alt="github"/>
                </a>
            </Icon>
            <Icon>
              <a href="https://www.linkedin.com/in/achorlia/" target="_blank" rel="noopener noreferrer">
                <GitIcon  src={linkedin} alt="linkedin"/>
              </a>
            </Icon>
            <Icon>
              <a href="" target="_blank" rel="noopener noreferrer">
                <GitIcon  src={gmail} alt="gmail"/>
              </a>
            </Icon>
            <Icon>
              <a href="https://twitter.com/andy8052" target="_blank" rel="noopener noreferrer">
                <GitIcon  src={twitter} alt="twitter"/>
              </a>
            </Icon>
            <Icon>
              <a href="https://www.instagram.com/andy8052/" target="_blank" rel="noopener noreferrer">
                <GitIcon  src={instagram} alt="instagram"/>
              </a>
            </Icon>
          </IconRow>
        </Split>
      </HeaderInfo>
    );
  }
}

export default AboutMe
