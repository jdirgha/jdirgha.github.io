import React from "react";
import "../styles/Connect.css";
import FadeInSection from "./FadeInSection";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class Connect extends React.Component {
  render() {
    return (
      <div id="connect">
        <FadeInSection>
          <div className="connect-content">
            <h2 className="connect-title">Let's Connect</h2>
            <p className="connect-description">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="connect-links">
              <a href="mailto:jivanidirgha@gmail.com" className="connect-link">
                <EmailRoundedIcon style={{ fontSize: 24 }} />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/dirgha-jivani/" target="_blank" rel="noopener noreferrer" className="connect-link">
                <LinkedInIcon style={{ fontSize: 24 }} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/jdirgha" target="_blank" rel="noopener noreferrer" className="connect-link">
                <GitHubIcon style={{ fontSize: 24 }} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Connect;

