import React from 'react';
import Terminal from './Terminal'

const me = {
  "college": "villanova university",
  "degree": "computer engineering",
  "job" : "makerdao",
  "role" : "smart contract developer",
  "interests" : ["nba", "blockchain", "video games", "weight lifting"]
}

class App extends React.Component {

  render() {
    return (
      <Terminal>
        <kbd>ls -a</kbd>
        <pre>.skills</pre>
        <pre><a href="https://github.com/andy8052" target="_blank" rel="noopener noreferrer">github</a></pre>
        <pre><a href="https://www.linkedin.com/in/achorlia/" target="_blank" rel="noopener noreferrer">linkedin</a></pre>
        <pre><a href="https://twitter.com/andy8052" target="_blank" rel="noopener noreferrer">twitter</a></pre>
        <pre><a href="" target="_blank" rel="noopener noreferrer">email</a></pre>
        <pre><a href="" target="_blank" rel="noopener noreferrer">medium</a></pre>
        <pre><a href={process.env.PUBLIC_URL+"/resume.pdf"} target="_blank">resume</a></pre>
        <pre>aboutme.json</pre>
        <kbd>cat aboutme.json</kbd>
        <pre>
          {JSON.stringify(me)}
        </pre>
        <kbd>cd .skills | ls -a</kbd>
        <pre>
          solidity 
          k-framework & formal verification
          java
          javacript/typescript
          react.js
          serverless
          c#
        </pre>
      </Terminal>
    );
  }
}

export default App
