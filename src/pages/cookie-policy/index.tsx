import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';

// Styled components for styling the CookiePolicy component
const CookiePolicyContainer = styled.div`
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

// Reusable functional component for each section with a title
const Section = ({ title, children }) => (
  <section>
    <SubTitle>{title}</SubTitle>
    {children}
  </section>
);

// Reusable functional component for list items in sections
const ListItem = ({ title, description }) => (
  <StyledLi>
    <strong>{title}</strong>
    <p>{description}</p>
  </StyledLi>
);

// Separate section components for organizing content
const LastUpdated = () => (
  <p><strong>Last Updated:</strong> 23rd May 2024</p>
);

const Mission = () => (
  <Section title="Our Mission">
    <p>Welcome to CodeHarborHub. Our mission is to provide accessible and comprehensive educational resources to learners of all levels. This Cookie Policy explains how we use cookies on our website.</p>
  </Section>
);

const WhatAreCookies = () => (
  <Section title="What Are Cookies?">
    <p>Cookies are small text files stored on your device when you visit a website. They help the site to remember your preferences and activities over time.</p>
  </Section>
);

const HowWeUseCookies = () => (
  <Section title="How We Use Cookies">
    <p>We use cookies to:</p>
    <StyledUl>
      <StyledLi>Enhance your user experience</StyledLi>
      <StyledLi>Analyze our website traffic</StyledLi>
      <StyledLi>Provide personalized content and advertisements</StyledLi>
    </StyledUl>
  </Section>
);

const TypesOfCookies = () => (
  <Section title="Types of Cookies We Use">
    <StyledOl>
      <ListItem
        title="Essential Cookies"
        description="These cookies are necessary for our website to function properly and cannot be switched off in our systems."
      />
      <ListItem
        title="Performance Cookies"
        description="These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously."
      />
      <ListItem
        title="Functionality Cookies"
        description="These cookies enable the website to provide enhanced functionality and personalization based on your interactions."
      />
      <ListItem
        title="Targeting/Advertising Cookies"
        description="These cookies are used to deliver ads more relevant to you and your interests. They may be set by us or by third-party providers."
      />
    </StyledOl>
  </Section>
);

const ManagingCookies = () => (
  <Section title="Managing Cookies">
    <p>You can manage or disable cookies through your browser settings. For more information on how to do this, visit your browser’s help section.</p>
  </Section>
);

const ThirdPartyCookies = () => (
  <Section title="Third-Party Cookies">
    <p>We may use third-party cookies for various purposes such as analytics and advertising. These cookies are governed by the privacy policies of the respective third parties.</p>
  </Section>
);

const CookiePolicyUpdates = () => (
  <Section title="Cookie Policy Updates">
    <p>We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the date at the top of this page.</p>
  </Section>
);

const ContactUs = () => (
  <Section title="Contact Us">
    <p>If you have any questions or concerns about our Cookie Policy, please contact us at:</p>
    <p><a href="mailto:ajaydhangar49@gmail.com" target="_blank" rel="noopener noreferrer">ajaydhangar49@gmail.com</a></p>
  </Section>
);

// Main CookiePolicy component combining all sections and content
const CookiePolicy = () => (
  <Layout>
    <CookiePolicyContainer>
      <Title>Cookie Policy</Title>
      <Content>
        <LastUpdated />
        <Mission />
        <WhatAreCookies />
        <HowWeUseCookies />
        <TypesOfCookies />
        <ManagingCookies />
        <ThirdPartyCookies />
        <CookiePolicyUpdates />
        <ContactUs />
      </Content>
    </CookiePolicyContainer>
  </Layout>
);

export default CookiePolicy;
