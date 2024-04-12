import Layout from "@theme/Layout";
import React from "react";
import styled from "styled-components";

const PrivacyPolicyContainer = styled.div`
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

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
`;

const Content = styled.p`
  margin-bottom: 20px;
`;

const StyledOl = styled.ol`
  margin-bottom: 20px;
`;

const StyledLi = styled.li`
  margin-bottom: 20px;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout
      title={`Privacy Policy`}
      description="Privacy Policy of CodeHarborHub for CodeHarborHub Learners, and users"
    >
      <PrivacyPolicyContainer>
        <Title>Privacy Policy</Title>
        <Content>
          <strong>Last Updated:</strong> 21st March 2024
          <br /> <br />
          Welcome to{" "}
          <a
            href="https://ajay-dhangar.github.io/code-harbor-hub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            CodeHarborHub
          </a>
          , an educational and technology-focused platform operated by{" "}
          <a
            href="https://github.com/Ajay-Dhangar"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Ajay Dhangar
          </a>
          . We are committed to protecting your privacy and ensuring the
          security of your personal information. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          visit our website.
          <br /> <br />
          By accessing or using our website, you consent to the terms of this
          Privacy Policy. If you do not agree with the terms of this Privacy
          Policy, please do not use our website.
          <br /> <br />
          <SubTitle>Information We Collect</SubTitle>
          We collect personal information that you voluntarily provide to us
          when you interact with the website, such as your name, email address,
          and any other information you choose to share. We may also collect
          technical information about your device and usage patterns to improve
          our website's functionality and user experience.
          <br /> <br />
          <SubTitle>How We Use Your Information</SubTitle>
          We may use the information we collect for the following purposes:
          <br /> <br />
          <StyledOl>
            <StyledLi>
              <Strong>Personalization:</Strong> To customize your experience on
              our website and provide content and resources tailored to your
              interests and preferences.
            </StyledLi>
            <StyledLi>
              <Strong>Communication:</Strong> To respond to your inquiries,
              provide customer support, and send you updates and notifications
              about our services, events, and educational materials.
            </StyledLi>
            <StyledLi>
              <Strong>Analytics:</Strong> To analyze trends, track user
              interactions, and gather demographic information to improve our
              website's performance and user experience.
            </StyledLi>
            <StyledLi>
              <Strong>Security:</Strong> To protect our website from security
              threats, fraud, or other malicious activities.
            </StyledLi>
            <StyledLi>
              <Strong>Legal Compliance:</Strong> To comply with applicable laws,
              regulations, or legal processes.
            </StyledLi>
            <StyledLi>
              <Strong>Marketing:</Strong> To promote our services, events, and
              educational materials through targeted advertising and promotional
              campaigns.
            </StyledLi>
          </StyledOl>
          <SubTitle>Disclosure of Your Information</SubTitle>
          We may share your information with trusted third-party service
          providers who assist us in operating our website, hosting our content,
          managing our communications, and analyzing user data. We may also
          disclose your information to comply with applicable laws and
          regulations, respond to legal requests, or protect our rights,
          property, or safety.
          <br /> <br />
          <SubTitle>Data Retention</SubTitle>
          We will retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
          <br /> <br />
          <SubTitle>Your Rights</SubTitle>
          You have the right to access, update, correct, or delete your personal
          information at any time. You can also object to the processing of your
          personal information or request that we restrict certain processing
          activities. To exercise these rights, please contact us using the
          information provided below.
          <br /> <br />
          <SubTitle>Third-Party Links</SubTitle>
          Our website may contain links to third-party websites or resources
          that are not owned or controlled by us. We are not responsible for the
          privacy practices or content of these third-party websites. We
          encourage you to review the privacy policies of these websites before
          providing any personal information.
          <br /> <br />
          <SubTitle>Children's Privacy</SubTitle>
          Our website is not directed to children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          are a parent or guardian and believe that your child has provided us
          with personal information, please contact us, and we will take
          appropriate steps to remove such information from our records.
          <br /> <br />
          <SubTitle>Changes to This Privacy Policy</SubTitle>
          We reserve the right to update or modify this Privacy Policy at any
          time. We will notify you of any changes by posting the new Privacy
          Policy on this page. Your continued use of our website after any
          modifications indicates your acceptance of the updated Privacy Policy.
          <br /> <br />
          <SubTitle>Contact Us</SubTitle>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a
            href="mailto:ajaydhangar49@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ajaydhangar49@gmail.com
          </a>
          . Thank you for visiting CodeHarborHub!
        </Content>
      </PrivacyPolicyContainer>
    </Layout>
  );
};

export default PrivacyPolicy;
