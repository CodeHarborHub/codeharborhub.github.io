import React from 'react';
import Layout from '@theme/Layout';
import styles from 'styled-components';

/**
 * Cookie Policy
 **/

const CookiePolicyContainer = styles.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  text-align: justify;
`;

const Title = styles.h2`
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
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

const Content = styles.div`
  margin-bottom: 20px;
`;

/**
 * Cookie Section
 **/

const CookieSection = ({ title, children }) => (
  <section>
    <SubTitle>{title}</SubTitle>
    {children}
  </section>
);

/**
 * Cookie Policy
 **/

const Cookiepolicy = () => {
  return (
    <Layout>
      <CookiePolicyContainer>
        <Title>Cookie Policy</Title>
        <Content>
          <p><strong>Last Updated:</strong> 23rd May 2024</p>
          <CookieSection title="Our Mission">
            <p>Welcome to CodeHarborHub. Our mission is to provide accessible and comprehensive educational resources to learners of all levels. This Cookie Policy explains how we use cookies on our website.</p>
          </CookieSection>
          <CookieSection title="What Are Cookies?">
            <p>Cookies are small text files stored on your device when you visit a website. They help the site to remember your preferences and activities over time.</p>
          </CookieSection>
          <CookieSection title="How We Use Cookies">
            <p>We use cookies to:</p>
            <StyledUl>
              <StyledLi>Enhance your user experience</StyledLi>
              <StyledLi>Analyze our website traffic</StyledLi>
              <StyledLi>Provide personalized content and advertisements</StyledLi>
            </StyledUl>
          </CookieSection>
          <CookieSection title="Types of Cookies We Use">
            <StyledOl>
              <StyledLi><strong>Essential Cookies</strong></StyledLi>
              <p>These cookies are necessary for our website to function properly and cannot be switched off in our systems.</p>
              <StyledLi><strong>Performance Cookies</strong></StyledLi>
              <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
              <StyledLi><strong>Functionality Cookies</strong></StyledLi>
              <p>These cookies enable the website to provide enhanced functionality and personalization based on your interactions.</p>
              <StyledLi><strong>Targeting/Advertising Cookies</strong></StyledLi>
              <p>These cookies are used to deliver ads more relevant to you and your interests. They may be set by us or by third-party providers.</p>
            </StyledOl>
          </CookieSection>
          <CookieSection title="Managing Cookies">
            <p>You can manage or disable cookies through your browser settings. For more information on how to do this, visit your browser’s help section.</p>
          </CookieSection>
          <CookieSection title="Third-Party Cookies">
            <p>We may use third-party cookies for various purposes such as analytics and advertising. These cookies are governed by the privacy policies of the respective third parties.</p>
          </CookieSection>
          <CookieSection title="Cookie Policy Updates">
            <p>We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the date at the top of this page.</p>
          </CookieSection>
          <CookieSection title="Contact Us">
            <p>If you have any questions or concerns about our Cookie Policy, please contact us at:</p>
            <p><a href="mailto:ajaydhangar49@gmail.com" target="_blank" rel="noopener noreferrer">ajaydhangar49@gmail.com</a></p>
          </CookieSection>
        </Content>
      </CookiePolicyContainer>
    </Layout>
  );
};

export default Cookiepolicy;
