import React from 'react';
import Layout from "@theme/Layout";
import styles from "styled-components";

const CookiePolicy = styles.div`
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


const Cookiepolicy = () => {
  return (
    <Layout>
        <CookiePolicy>
            <Title>Cookie Policy</Title>
            <Content>
            <strong>Last Updated:</strong> 23rd May 2024
          <br /> <br />
          <SubTitle>Our Mission</SubTitle>
          Welcome to CodeHarborHub. Our mission is to provide accessible and comprehensive educational resources to learners of all levels. This Cookie Policy explains how we use cookies on our website.<br/><br/>
          <SubTitle>What Are Cookies?</SubTitle>
          Cookies are small text files stored on your device when you visit a website. They help the site to remember your preferences and activities over time.<br/><br/>
          <SubTitle>How We Use Cookies</SubTitle>
          We use cookies to:<br/><br/>
          <StyledUl>
            <StyledLi>Enhance your user experience</StyledLi>
            <StyledLi>Analyze our website traffic</StyledLi>
            <StyledLi>Provide personalized content and advertisements</StyledLi>
          </StyledUl><br/>
          <SubTitle>Types of Cookies We Use</SubTitle><br/>
          <StyledOl>
            <StyledLi><strong>Essential Cookies</strong></StyledLi>
            These cookies are necessary for our website to function properly and cannot be switched off in our systems.<br/><br/>
            <StyledLi><strong>Performance Cookies</strong></StyledLi>
            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.<br/><br/>
            <StyledLi><strong>Functionality Cookies</strong></StyledLi>
            These cookies enable the website to provide enhanced functionality and personalization based on your interactions.<br/><br/>
            <StyledLi><strong>Targeting/Advertising Cookies</strong></StyledLi>
            These cookies are used to deliver ads more relevant to you and your interests. They may be set by us or by third-party providers.<br/><br/>
          </StyledOl>
          <SubTitle><strong>Managing Cookies</strong></SubTitle>
          You can manage or disable cookies through your browser settings. For more information on how to do this, visit your browser’s help section.<br/><br/>
          <SubTitle><strong>Third-Party Cookies</strong></SubTitle>
          We may use third-party cookies for various purposes such as analytics and advertising. These cookies are governed by the privacy policies of the respective third parties.<br/><br/>
          <SubTitle><strong>Cookie Policy Updates</strong></SubTitle>
          We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the date at the top of this page.<br/><br/>
          <SubTitle><strong>Contact Us</strong></SubTitle>
          If you have any questions or concerns about our Cookie Policy, please contact us at: 
          <a href="mailto:ajaydhangar49@gmail.com" target="_blank"
            rel="noopener noreferrer">{" "}ajaydhangar49@gmail.com</a>.
          </Content>
        </CookiePolicy>
    </Layout>
  )
}

export default Cookiepolicy