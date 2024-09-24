import React from "react";
import Layout from "@theme/Layout";

const TermsOfService: React.FC = () => {
  return (
    <Layout
      title={"Terms of Service"}
      description="Terms of Service Page for CodeHarborHub Learners, and users"
    >
      <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg mt-8 mb-8 text-base leading-relaxed font-sans text-justify">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Terms of Service
        </h2>
        <p className="mb-6">
          These Terms of Service govern your use of{" "}
          <b className="bg-yellow-100">CodeHarborHub</b>, provided by{" "}
          <strong className="bg-yellow-100">Ajay Dhangar</strong>. By accessing
          or using the Service, you agree to be bound by these Terms. If you
          disagree with any part of the Terms, you may not access the Service.
        </p>
        <h3 className="text-xl font-bold mb-4">Acceptance of Terms</h3>
        <p className="mb-6">
          By accessing or using the Service, you acknowledge that you have read,
          understood, and agree to be bound by these Terms, as well as any
          additional terms and conditions, policies, and guidelines provided by
          us. If you do not agree to these Terms, please refrain from using the
          Service.
        </p>
        <h3 className="text-xl font-bold mb-4">Use of the Service</h3>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-4">
            <strong>Eligibility:</strong> You must be at least 18 years old to
            use the Service. By using the Service, you represent and warrant
            that you are at least 18 years old.
          </li>
          <li className="mb-4">
            <strong>License:</strong> We grant you a limited, non-exclusive,
            non-transferable, and revocable license to access and use the
            Service for your personal or internal business purposes. This
            license does not permit any resale or commercial use of the Service.
          </li>
          <li className="mb-4">
            <strong>User Conduct:</strong> You agree not to engage in any
            activity that interferes with or disrupts the Service or its servers
            and networks. You also agree not to use the Service for any illegal
            or unauthorized purpose.
          </li>
        </ol>
        <h3 className="text-xl font-bold mb-4">Content</h3>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-4">
            <strong>User Content:</strong> You retain ownership of any content
            you submit or upload to the Service (&quot;User Content&quot;). By
            submitting User Content, you grant us a worldwide, royalty-free, and
            non-exclusive license to use, reproduce, modify, adapt, publish,
            translate, distribute, and display such User Content.
          </li>
          <li className="mb-4">
            <strong>Intellectual Property:</strong> All content, trademarks,
            service marks, logos, and other intellectual property displayed on
            or related to the Service are the property of{" "}
            <strong className="bg-yellow-100">Ajay Dhangar</strong> or its
            licensors. You may not use or display any of these without our prior
            written consent.
          </li>
        </ol>
        <h3 className="text-xl font-bold mb-4">Privacy</h3>
        <p className="mb-6">
          Your privacy is important to us. Please review our{" "}
          <a
            href="/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Privacy Policy
          </a>{" "}
          to understand how we collect, use, and disclose your personal
          information.
        </p>
        <h3 className="text-xl font-bold mb-4">Termination</h3>
        <p className="mb-6">
          We reserve the right to suspend or terminate your access to the
          Service at any time, with or without cause, and without notice or
          liability.
        </p>
        <h3 className="text-xl font-bold mb-4">Disclaimer of Warranties</h3>
        <p className="mb-6">
          THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS
          AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR
          IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR
          REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. USE OF
          THE SERVICE IS AT YOUR OWN RISK.
        </p>
        <h3 className="text-xl font-bold mb-4">Limitation of Liability</h3>
        <p className="mb-6">
          IN NO EVENT SHALL AJAY DHANGAR BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, ARISING OUT OF OR IN
          CONNECTION WITH YOUR USE OF THE SERVICE. UNDER NO CIRCUMSTANCES SHALL
          WE BE LIABLE FOR ANY DELAY OR FAILURE IN PERFORMANCE RESULTING
          DIRECTLY OR INDIRECTLY FROM AN EVENT BEYOND OUR REASONABLE CONTROL.
        </p>
        <h3 className="text-xl font-bold mb-4">Governing Law</h3>
        <p className="mb-6">
          These Terms shall be governed by and construed per the laws of India,
          without regard to its conflict of law principles.
        </p>
        <h3 className="text-xl font-bold mb-4">Changes to the Terms</h3>
        <p className="mb-6">
          We reserve the right to update or modify these Terms at any time,
          without prior notice. By continuing to use the Service after any such
          changes, you agree to be bound by the updated Terms. Please review
          these Terms periodically for any updates or changes.
        </p>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:codeharborhub@gmail.com"
            className="text-blue-600 underline"
          >
            codeharborhub@gmail.com
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfService;
