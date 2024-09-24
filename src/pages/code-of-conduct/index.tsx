import React from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";

const Section = ({ title, children }) => (
  <section>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </section>
);

const ListItem = ({ title, description }) => (
  <li className="mb-4">
    <strong>{title}</strong>
    <p>{description}</p>
  </li>
);

const LastUpdated = () => (
  <p><strong>Last Updated:</strong> 23rd May 2024</p>
);

const OurPledge = () => (
  <Section title="Our Pledge">
    <p>We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>
    <p>We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.</p>
  </Section>
);

const OurStandards = () => (
  <Section title="Our Standards">
    <p>Examples of behavior that contributes to a positive environment for our community include:</p>
    <ul className="list-disc list-inside mb-4">
      <li>Demonstrating empathy and kindness toward other people</li>
      <li>Being respectful of differing opinions, viewpoints, and experiences</li>
      <li>Giving and gracefully accepting constructive feedback</li>
      <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
      <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
    </ul>
    <p>Examples of unacceptable behavior include:</p>
    <ul className="list-disc list-inside mb-4">
      <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
      <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
      <li>Public or private harassment</li>
      <li>Publishing other&apos;s private information, such as a physical or email address, without their explicit permission</li>
      <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
    </ul>
  </Section>
);

const EnforcementResponsibilities = () => (
  <Section title="Enforcement Responsibilities">
    <p>Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.</p>
    <p>Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.</p>
  </Section>
);

const Scope = () => (
  <Section title="Scope">
    <p>This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.</p>
  </Section>
);

const Enforcement = () => (
  <Section title="Enforcement">
    <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at Email. All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter of any incident.</p>
  </Section>
);

const EnforcementGuidelines = () => (
  <Section title="Enforcement Guidelines">
    <p>Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:</p>
    <ol className="list-decimal list-inside mb-4">
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
    </ol>
  </Section>
);

const Attribution = () => (
  <Section title="Attribution">
    <p>This Code of Conduct is adapted from the <Link to="https://www.contributor-covenant.org/" target="_blank" rel="noopener noreferrer">Contributor Covenant</Link>, version 2.0, available at <Link to="https://www.contributor-covenant.org/version/2/0/code_of_conduct/" target="_blank" rel="noopener noreferrer">https://www.contributor-covenant.org/version/2/0/code_of_conduct.html</Link>.</p>
    <p>Community Impact Guidelines were inspired by <Link to="https://github.com/mozilla/inclusion" target="_blank" rel="noopener noreferrer">Mozilla&apos;s code of conduct enforcement ladder</Link>.</p>
    <p>For answers to common questions about this code of conduct, see the FAQ at <Link to="https://www.contributor-covenant.org/faq/" target="_blank" rel="noopener noreferrer">https://www.contributor-covenant.org/faq/</Link>. Translations are available at <Link to="https://www.contributor-covenant.org/translations" target="_blank" rel="noopener noreferrer">https://www.contributor-covenant.org/translations</Link>.</p>
  </Section>
);

const CodeOfConduct = () => (
  <Layout>
    <div className="max-w-4xl mx-auto p-5 mt-5 mb-5 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-5">Code Of Conduct</h2>
      <div className="mb-5">
        <LastUpdated />
        <OurPledge />
        <OurStandards />
        <EnforcementResponsibilities />
        <Scope />
        <Enforcement />
        <EnforcementGuidelines />
        <Attribution />
      </div>
    </div>
  </Layout>
);

export default CodeOfConduct;
