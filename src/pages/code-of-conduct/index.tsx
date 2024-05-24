import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';

// Styled Components
const CodeOfConductContainer = styled.div`
  width: 50%;
  display: block;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  text-align: justify;

  @media (max-width: 760px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
`;

const StyledUl = styled.ul`
  margin-bottom: 20px;
`;

const StyledLi = styled.li`
  margin-bottom: 20px;
`;

const StyledOl = styled.ol`
  margin-bottom: 20px;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

// Reusable Components
const Section = ({ title, children }) => (
  <section>
    <SubTitle>{title}</SubTitle>
    {children}
  </section>
);

// Reusable Components
const ListItem = ({ title, description }) => (
  <StyledLi>
    <strong>{title}</strong>
    <p>{description}</p>
  </StyledLi>
);

// Separate Sections as Components
const LastUpdated = () => (
  <p><strong>Last Updated:</strong> 23rd May 2024</p>
);

// Separate Sections as Components
const OurPledge = () => (
  <Section title="Our Pledge">
    <p>We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>
    <p>We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.</p>
  </Section>
);

// Separate Sections as Components
const OurStandards = () => (
  <Section title="Our Standards">
    <p>Examples of behavior that contributes to a positive environment for our community include:</p>
    <StyledUl>
      <StyledLi>Demonstrating empathy and kindness toward other people</StyledLi>
      <StyledLi>Being respectful of differing opinions, viewpoints, and experiences</StyledLi>
      <StyledLi>Giving and gracefully accepting constructive feedback</StyledLi>
      <StyledLi>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</StyledLi>
      <StyledLi>Focusing on what is best not just for us as individuals, but for the overall community</StyledLi>
    </StyledUl>
    <p>Examples of unacceptable behavior include:</p>
    <StyledUl>
      <StyledLi>The use of sexualized language or imagery, and sexual attention or advances of any kind</StyledLi>
      <StyledLi>Trolling, insulting or derogatory comments, and personal or political attacks</StyledLi>
      <StyledLi>Public or private harassment</StyledLi>
      <StyledLi>Publishing others&apos; private information, such as a physical or email address, without their explicit permission</StyledLi>
      <StyledLi>Other conduct which could reasonably be considered inappropriate in a professional setting</StyledLi>
    </StyledUl>
  </Section>
);

// Separate Sections as Components
const EnforcementResponsibilities = () => (
  <Section title="Enforcement Responsibilities">
    <p>Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.</p>
    <p>Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.</p>
  </Section>
);

// Separate Sections as Components
const Scope = () => (
  <Section title="Scope">
    <p>This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.</p>
  </Section>
);

// Separate Sections as Components
const Enforcement = () => (
  <Section title="Enforcement">
    <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at Email. All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter of any incident.</p>
  </Section>
);

// Separate Sections as Components
const EnforcementGuidelines = () => (
  <Section title="Enforcement Guidelines">
    <p>Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:</p>
    <StyledOl>
      <ListItem
        title="Correction"
        description={
          <>
            <strong>Community Impact:</strong> Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.
            <br />
            <strong>Consequence:</strong> A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.
          </>
        }
      />
      <ListItem
        title="Warning"
        description={
          <>
            <strong>Community Impact:</strong> A violation through a single incident or series of actions.
            <br />
            <strong>Consequence:</strong> A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.
          </>
        }
      />
      <ListItem
        title="Temporary Ban"
        description={
          <>
            <strong>Community Impact:</strong> A serious violation of community standards, including sustained inappropriate behavior.
            <br />
            <strong>Consequence:</strong> A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.
          </>
        }
      />
      <ListItem
        title="Permanent Ban"
        description={
          <>
            <strong>Community Impact:</strong> Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.
            <br />
            <strong>Consequence:</strong> A permanent ban from any sort of public interaction within the community.
          </>
        }
      />
    </StyledOl>
  </Section>
);

// Separate Sections as Components
const Attribution = () => (
  <Section title="Attribution">
    <p>This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org/" target="_blank" rel="noopener noreferrer">Contributor Covenant</a>, version 2.0, available at <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/" target="_blank" rel="noopener noreferrer">https://www.contributor-covenant.org/version/2/0/code_of_conduct.html</a>.</p>
    <p>Community Impact Guidelines were inspired by <a href="https://github.com/mozilla/inclusion" target="_blank" rel="noopener noreferrer">Mozilla&apos;s code of conduct enforcement ladder</a>.</p>
    <p>For answers to common questions about this code of conduct, see the FAQ at <a href="https://www.contributor-covenant.org/faq/" target="_blank" rel="noopener noreferrer">https://www.contributor-covenant.org/faq/</a>. Translations are available at <a href="https://www.contributor-covenant.org/translations" target="_blank" rel="noopener noreferrer">https://www.contributor-covenant.org/translations</a>.</p>
  </Section>
);

// Code of Conduct Component
const CodeOfConduct = () => (
  <Layout>
    <CodeOfConductContainer>
      <Title>Code Of Conduct</Title>
      <Content>
        <LastUpdated />
        <OurPledge />
        <OurStandards />
        <EnforcementResponsibilities />
        <Scope />
        <Enforcement />
        <EnforcementGuidelines />
        <Attribution />
      </Content>
    </CodeOfConductContainer>
  </Layout>
);

export default CodeOfConduct;