import React from 'react';
import Layout from "@theme/Layout";
import styles from "styled-components";

const CodeOfConduct = styles.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
`;

const Title = styles.h2`
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
`;

const Content = styles.p`
  margin-bottom: 20px;
`;

const SubTitle = styles.h3`
  margin-bottom: 20px;
  font-weight: 700;
`;

const StyledUl = styles.ul`
  margin-bottom: 20px;
`;

const StyledLi = styles.li`
  margin-bottom: 20px;
`;

const StyledOl = styles.ol`
  margin-bottom: 20px;
`;


const Codeofconduct = () => {
  return (
    <Layout>
        <CodeOfConduct>
            <Title>Code Of Conduct</Title>
            <Content>
            <strong>Last Updated:</strong> 23rd May 2024
          <br /> <br />
          <SubTitle>Our Pledge</SubTitle>
          We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.<br/><br/>We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
          <br/><br/><SubTitle>Our Standards</SubTitle>
          Examples of behavior that contributes to a positive environment for our community include: <br/><br/>
          <StyledUl>
            <StyledLi>Demonstrating empathy and kindness toward other people</StyledLi>
            <StyledLi>Being respectful of differing opinions, viewpoints, and experiences</StyledLi>
            <StyledLi>Giving and gracefully accepting constructive feedback</StyledLi>
            <StyledLi>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</StyledLi>
            <StyledLi>Focusing on what is best not just for us as individuals, but for the overall community</StyledLi>
          </StyledUl><br/>
          Examples of unacceptable behavior include:<br/><br/>
          <StyledUl>
            <StyledLi>The use of sexualized language or imagery, and sexual attention or advances of any kind</StyledLi>
            <StyledLi>Trolling, insulting or derogatory comments, and personal or political attacks</StyledLi>
            <StyledLi>Public or private harassment</StyledLi>
            <StyledLi>Publishing others' private information, such as a physical or email address, without their explicit permission</StyledLi>
            <StyledLi>Other conduct which could reasonably be considered inappropriate in a professional setting</StyledLi>
          </StyledUl><br/>
          <SubTitle>Enforcement Responsibilities</SubTitle>
          Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.<br/><br/>
          Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.<br/><br/>
          <SubTitle>Scope</SubTitle>
          This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.<br/><br/>
          <SubTitle>Enforcement</SubTitle>
          Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at Email. All complaints will be reviewed and investigated promptly and fairly.<br/><br/>All community leaders are obligated to respect the privacy and security of the reporter of any incident.<br/><br/>
          <SubTitle>Enforcement Guidelines</SubTitle>
          Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:<br/><br/>
          <StyledOl>
            <StyledLi><strong>Correction</strong></StyledLi>
            <strong>Community Impact: </strong>Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.<br/><br/>
            <strong>Consequence: </strong>A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.<br/><br/>
            <StyledLi><strong>Warning</strong></StyledLi>
            <strong>Community Impact: </strong>A violation through a single incident or series of actions.<br/><br/>
            <strong>Consequence: </strong>A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.<br/><br/>
            <StyledLi><strong>Temporary Ban</strong></StyledLi>
            <strong>Community Impact: </strong>A serious violation of community standards, including sustained inappropriate behavior.<br/><br/>
            <strong>Consequence: </strong>A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.<br/><br/>
            <StyledLi><strong>Permanent Ban</strong></StyledLi>
            <strong>Community Impact: </strong>Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.<br/><br/>
            <strong>Consequence: </strong>A permanent ban from any sort of public interaction within the community.<br/><br/>
          </StyledOl>
          <SubTitle>Attribution</SubTitle>
          This Code of Conduct is adapted from the 
          <a href="https://www.contributor-covenant.org/" target="_blank"
            rel="noopener noreferrer">{" "}Contributor Covenant</a>, version 2.0, available at 
          <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/" target="_blank"
            rel="noopener noreferrer">{" "}https://www.contributor-covenant.org/version/2/0/code_of_conduct.html</a>.<br/><br/>
          Community Impact Guidelines were inspired by <a href="https://github.com/mozilla/inclusion" target="_blank"
            rel="noopener noreferrer">{" "}Mozilla's code of conduct enforcement ladder</a>.<br/><br/>
            For answers to common questions about this code of conduct, see the FAQ at <a href="https://www.contributor-covenant.org/faq/" target="_blank"
            rel="noopener noreferrer">{" "}https://www.contributor-covenant.org/faq/</a>. . Translations are available at <a href="https://www.contributor-covenant.org/translations" target="_blank"
            rel="noopener noreferrer">{" "}https://www.contributor-covenant.org/translations</a>.
            </Content>
        </CodeOfConduct>
    </Layout>
  )
}

export default Codeofconduct