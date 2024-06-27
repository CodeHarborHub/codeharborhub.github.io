import Layout from "@theme/Layout";
import React from "react";

import styled from "styled-components";

const LicensingContainer = styled.div`
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
    margin-bottom: 24px;

    font-family: "Open Sans", sans-serif;
    font-weight: 700;

    line-height: 1.6;
    text-align: center;
    font-size : 27px;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;

`;

const Content = styled.p`
  margin-bottom: 20px;

`;

const Licensing: React.FC = () => {
  return (
    <Layout

      title={"Licensing"}
      description="Licensing information for CodeHarborHub"

    >
      <LicensingContainer>

        <Title>Licensing</Title>

        Welcome to CodeHarborHub, This project is licensed under the MIT License. This page outlines the terms of the
      license and provides details on how you can use, modify and distribute our project.

        <Content>
          <SubTitle>MIT License</SubTitle>
          <Content>

            <strong>Copyright (c) 2024 CodeHarborHub</strong>
            <br />
            <br />

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:

            <br />
            <br />

            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            <br />
            <br />

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
            <br />
            <br />
          </Content>

        </Content>
      </LicensingContainer>

    </Layout>


  );
};




export default Licensing;
