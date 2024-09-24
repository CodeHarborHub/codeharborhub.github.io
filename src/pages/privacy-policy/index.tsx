import Layout from "@theme/Layout";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy of CodeHarborHub for CodeHarborHub Learners, and users"
    >
      <div className="max-w-4xl mx-auto p-5 mt-5 mb-5 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-5">Privacy Policy</h2>
        <p className="text-base leading-7">
          <strong>Last Updated:</strong> 21st March 2024
          <br /> <br />
          Welcome to{" "}
          <a
            href="https://ajay-dhangar.github.io/code-harbor-hub/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            CodeHarborHub
          </a>
          , an educational and technology-focused platform operated by{" "}
          <a
            href="https://github.com/ajay-dhangar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
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
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">
          Information We Collect
        </h3>
        <p className="mb-4">
          We collect personal information that you voluntarily provide to us
          when you interact with the website, such as your name, email address,
          and any other information you choose to share. We may also collect
          technical information about your device and usage patterns to improve
          our website&apos;s functionality and user experience.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">
          How We Use Your Information
        </h3>
        <ol className="list-decimal list-inside mb-4 space-y-4">
          <li>
            <strong>Personalization:</strong> To customize your experience on
            our website and provide content and resources tailored to your
            interests and preferences.
          </li>
          <li>
            <strong>Communication:</strong> To respond to your inquiries,
            provide customer support, and send you updates and notifications
            about our services, events, and educational materials.
          </li>
          <li>
            <strong>Analytics:</strong> To analyze trends, track user
            interactions, and gather demographic information to improve our
            website&apos;s performance and user experience.
          </li>
          <li>
            <strong>Security:</strong> To protect our website from security
            threats, fraud, or other malicious activities.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with applicable laws,
            regulations, or legal processes.
          </li>
          <li>
            <strong>Marketing:</strong> To promote our services, events, and
            educational materials through targeted advertising and promotional
            campaigns.
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-5 mb-3">
          Disclosure of Your Information
        </h3>
        <p className="mb-4">
          We may share your information with trusted third-party service
          providers who assist us in operating our website, hosting our content,
          managing our communications, and analyzing user data. We may also
          disclose your information to comply with applicable laws and
          regulations, respond to legal requests, or protect our rights,
          property, or safety.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">Data Retention</h3>
        <p className="mb-4">
          We will retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">Your Rights</h3>
        <p className="mb-4">
          You have the right to access, update, correct, or delete your personal
          information at any time. You can also object to the processing of your
          personal information or request that we restrict certain processing
          activities. To exercise these rights, please contact us using the
          information provided below.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">Third-Party Links</h3>
        <p className="mb-4">
          Our website may contain links to third-party websites or resources
          that are not owned or controlled by us. We are not responsible for the
          privacy practices or content of these third-party websites. We
          encourage you to review the privacy policies of these websites before
          providing any personal information.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">
          Children&apos;s Privacy
        </h3>
        <p className="mb-4">
          Our website is not directed to children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          are a parent or guardian and believe that your child has provided us
          with personal information, please contact us, and we will take
          appropriate steps to remove such information from our records.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">
          Changes to This Privacy Policy
        </h3>
        <p className="mb-4">
          We reserve the right to update or modify this Privacy Policy at any
          time. We will notify you of any changes by posting the new Privacy
          Policy on this page. Your continued use of our website after any
          modifications indicates your acceptance of the updated Privacy Policy.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-3">Contact Us</h3>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a
            href="mailto:codeharborhub@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            codeharborhub@gmail.com
          </a>
          . Thank you for visiting CodeHarborHub!
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
