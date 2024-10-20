import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </section>
);

interface ListItemProps {
  title: string;
  description: ReactNode;
}

const ListItem = ({ title, description }: ListItemProps) => (
  <li className="mb-4">
    <strong className="font-medium">{title}</strong>
    <p>{description}</p>
  </li>
);

const LastUpdated = () => (
  <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">
    <strong>Last Updated:</strong> 23rd May 2024
  </p>
);

const OurPledge = () => (
  <Section title="Our Pledge">
    <p className="mb-4">
      We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
    </p>
    <p>
      We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
    </p>
  </Section>
);

const OurStandards = () => (
  <Section title="Our Standards">
    <p className="mb-4">Examples of behavior that contributes to a positive environment for our community include:</p>
    <ul className="list-disc list-inside mb-4">
      <li>Demonstrating empathy and kindness toward other people</li>
      <li>Being respectful of differing opinions, viewpoints, and experiences</li>
      <li>Giving and gracefully accepting constructive feedback</li>
      <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
      <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
    </ul>
    <p className="mb-4">Examples of unacceptable behavior include:</p>
    <ul className="list-disc list-inside mb-4">
      <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
      <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
      <li>Public or private harassment</li>
      <li>Publishing others' private information, such as a physical or email address, without their explicit permission</li>
      <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
    </ul>
  </Section>
);

const EnforcementResponsibilities = () => (
  <Section title="Enforcement Responsibilities">
    <p className="mb-4">
      Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
    </p>
    <p>
      Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
    </p>
  </Section>
);

const Scope = () => (
  <Section title="Scope">
    <p>
      This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
    </p>
  </Section>
);

const Enforcement = () => (
  <Section title="Enforcement">
    <p>
      Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at Email. All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter of any incident.
    </p>
  </Section>
);

const EnforcementGuidelines = () => (
  <Section title="Enforcement Guidelines">
    <p className="mb-4">
      Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
    </p>
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
            <strong>Consequence:</strong> A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period. Violating these terms may lead to a temporary or permanent ban.
          </>
        }
      />
      <ListItem
        title="Temporary Ban"
        description={
          <>
            <strong>Community Impact:</strong> A serious violation of community standards, including sustained inappropriate behavior.
            <br />
            <strong>Consequence:</strong> A temporary ban from any interaction or public communication with the community for a specified period. Violating these terms may lead to a permanent ban.
          </>
        }
      />
      <ListItem
        title="Permanent Ban"
        description={
          <>
            <strong>Community Impact:</strong> Demonstrating a pattern of violation of community standards, including harassment of an individual, or disparagement of groups.
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
    <p className="mb-2">
      This Code of Conduct is adapted from the <Link to="https://www.contributor-covenant.org/" target="_blank" rel="noopener noreferrer">Contributor Covenant</Link>, version 2.0.
    </p>
    <p>
      For more details, visit <Link to="https://www.contributor-covenant.org/version/2/0/code_of_conduct/" target="_blank" rel="noopener noreferrer">here</Link>.
    </p>
  </Section>
);

const CodeOfConduct = () => (
  <Layout>
    <div className="max-w-4xl mx-auto p-6 mt-5 mb-5 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-5">Code Of Conduct</h2>
      <div className="space-y-6">
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