import React from "react";
import styled from "styled-components";
import Layout from "@theme/Layout";

const TermsContainer = styled.div`
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
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  line-height: 1.6;
`;

const Content = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  text-align: justify;
`;

const StyledOl = styled.ol`
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  font-size: 16px;
  text-align: justify;
`;

const StyledLi = styled.li`
  margin-bottom: 20px;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const TermsOfService: React.FC = () => {
  return (
    <Layout
    title={"Terms of Service"}
    description="Terms of Service Page for CodeHarborHub Learners, and users"
    >
      <TermsContainer>
        <Title>Terms of Service</Title>
        <Content>
          These Terms of Service govern your use of <b><mark>CodeHarborHub</mark></b>,
          provided by <Strong><mark>Ajay Dhangar</mark></Strong>. By accessing or using the Service,
          you agree to be bound by these Terms. If you disagree with any part of
          the Terms, you may not access the Service.
          <br /> <br />
          <SubTitle>Acceptance of Terms</SubTitle>
          By accessing or using the Service, you acknowledge that you have read,
          understood, and agree to be bound by these Terms, as well as any
          additional terms and conditions, policies, and guidelines provided by
          us. If you do not agree to these Terms, please refrain from using the
          Service.
            <br /> <br />
            <SubTitle>Use of the Service</SubTitle>
            
            <StyledOl>
                <StyledLi>
                <Strong>Eligibility:</Strong> You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you are at least 18 years old.
                </StyledLi>
                <StyledLi>
                <Strong>License:</Strong> We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your personal or internal business purposes. This license does not permit any resale or commercial use of the Service.
                </StyledLi>
                <StyledLi>
                <Strong>User Conduct:</Strong> You agree not to engage in any activity that interferes with or disrupts the Service or its servers and networks. You also agree not to use the Service for any illegal or unauthorized purpose.
                </StyledLi>
            </StyledOl>

            <SubTitle>Content</SubTitle>

            <StyledOl>
                <StyledLi>
                 <Strong>User Content:</Strong> You retain ownership of any content you submit or upload to the Service ("User Content"). By submitting User Content, you grant us a worldwide, royalty-free, and non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content.
                </StyledLi>
                <StyledLi>
                <Strong>Intellectual Property:</Strong> All content, trademarks, service marks, logos, and other intellectual property displayed on or related to the Service are the property of <Strong><mark>Ajay Dhangar</mark></Strong> or its licensors. You may not use or display any of these without our prior written consent.
                </StyledLi>
            </StyledOl>

            <SubTitle>Privacy</SubTitle>

            Your privacy is important to us. Please review our <a href="/code-harbor-hub/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> to understand how we collect, use, and disclose your personal information.

            <br /> <br />

            <SubTitle>Termination</SubTitle>
            We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, and without notice or liability.

            <br /> <br />

            <SubTitle>Disclaimer of Warranties</SubTitle>

            THE SERVICE IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. USE OF THE SERVICE IS AT YOUR OWN RISK.

            <br /> <br />

            <SubTitle>Limitation of Liability</SubTitle>

            IN NO EVENT SHALL AJAY DHANGAR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE. UNDER NO CIRCUMSTANCES SHALL WE BE LIABLE FOR ANY DELAY OR FAILURE IN PERFORMANCE RESULTING DIRECTLY OR INDIRECTLY FROM AN EVENT BEYOND OUR REASONABLE CONTROL.

            <br /> <br />

            <SubTitle>Governing Law</SubTitle>

            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.

            <br /> <br />

            <SubTitle>Changes to the Terms</SubTitle>

            We reserve the right to update or modify these Terms at any time, without prior notice. By continuing to use the Service after any such changes, you agree to be bound by the updated Terms. Please review these Terms periodically for any updates or changes.

            <br /> <br />

            <SubTitle>Contact Us</SubTitle>

            If you have any questions about these Terms, please contact us at <a href="mailto:ajaydhangar49@gmail.com">ajaydhangar49@gmail.com </a>.

        </Content>
      </TermsContainer>
    </Layout>
  );
};

export default TermsOfService;
