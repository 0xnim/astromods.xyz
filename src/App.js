import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="."><img src="https://portal.astromods.xyz/logo512.png"></img> </a>
          </div>
          <div className="nav">
            <a href="https://portal.astromods.xyz">PORTAL</a>
            <a href="https://status.astromods.xyz/status/main">STATUS</a>
          </div>
          <div className="social">
            {/*
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            */}
            <a href="https://github.com/nim1com/astromods.xyz" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:contact.urlou@passfwd.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>AstroMods made by <a className="underlined" href="https://github.com/nim1com" target="_blank" rel="noopener noreferrer">0xNim</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/nim1com/astromods.xyz" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default App;