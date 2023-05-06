import React from "react";
import './privacy_policy.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Announcement from "../../components/announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import './privacy_policy.css'

const PrivacyPolicy = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="inner-container">
       
        <div>
          <h1>PRIVACY & POLICY</h1> <br />
          <p>
            We value the trust you place in us and recognize the importance of
            secure transactions and information privacy. This Privacy Policy
            describes how XTYLES Internet Private Limited and its affiliates
            (collectively XTYLES, we, our, us”) collect, use, share or otherwise
            process your personal information through XTYLES website
            www.Xtyles.com.
          </p>
          <h3>Collection of Your Information</h3>
          <p>
            XTYLES takes the privacy of your information seriously. This Privacy
            Notice describes the Data we collect from you through our website,
            including sub-domains microsites (“Platforms”). It also describes the
            purposes for which we collect that personal information, the other
            parties with whom we may share it and the measures we take to protect
            the security of your data. It also tells you about your rights and
            choices with respect to your personal information, and how you can
            contact us about our privacy practices.
          </p>
          <h3>Security</h3>
          <p>
            XTYLES implements standard measures to protect against unauthorized
            access to and unlawful interception of Data. However, no internet site
            can fully eliminate security risks. XTYLES endeavors to take all
            measures to protect the security, integrity and confidentiality of the
            Data against unauthorized breach and hacking. For the purpose of
            checking possible vulnerabilities and attacks, XTYLES may conduct
            periodical internal review of data and security measures on the
            Platforms. However the internet is not absolutely a secure
            environment, and the Platforms cannot ensure or warrant a 100%
            security of the Platforms. <br /> <br />
            Notwithstanding anything contained in this Policy or elsewhere, XTYLES
            shall not be held responsible for any loss, damage or misuse of the
            Data, if such loss, damage or misuse is attributable to a Force
            Majeure Event. A "Force Majeure Event" means any event that is beyond
            the reasonable control of XTYLES and includes, without limitation,
            fire, flood, explosion, acts of God, civil commotion, strikes, lock
            outs or industrial action of any kind, riots, insurrection, war, acts
            of government, power failure, sabotage, computer hacking, unauthorised
            access to computer data and storage device, system failure, virus,
            attacks, bugs, computer crashes, breach of security and encryption.
          </p>
          <h3>CHANGES TO THIS POLICY</h3>
          <p>
            Our business changes constantly and our Policy will change also. We
            may e-mail periodic reminders of our notices and conditions, unless
            you have instructed us not to, but you should check our Platforms
            frequently to see recent changes. The updated version will be
            effective as soon as it is accessible. Any changes will be immediately
            posted on our Platforms and you are deemed to have accepted the terms
            of the updated Policy on your first use of our Platform or first
            purchase of the products and/or services following the alterations. We
            encourage you to review this Policy frequently to be informed of how
            we are protecting your information.
          </p>
          <h3>HOW TO CONTACT US</h3>
          <p>
            To request to review, update, or delete your personal information or
            to otherwise reach us, please submit a request by e-mailing us at
            /------------------/ You may contact us for information on
            Service Providers, Partners and Tata Group Entities with whom we may
            share your Data in compliance with this Privacy Notice and applicable
            law. We will respond to your request within 30 days.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>

  );
};

export default PrivacyPolicy;
