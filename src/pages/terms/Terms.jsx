import Announcement from "../../components/announcement/Announcement";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";


const Terms = () => {

  return (
    <>
      <Announcement />
      <Navbar />
      <div className='inner-container'>
        <h1>Terms for Use</h1>
        <p>This website and any mobile application (collectively, this “Site”) is owned by XTYLES (“We”, “Us” or “XTYLES”). We are providing you with access to this Site and our online store subject to the following terms and conditions. By browsing, accessing, using, registering for or purchasing merchandise on this Site or otherwise using our Services, you are agreeing to all of the following terms and conditions, including any policies referred to herein (collectively, these “Terms”). So, please read these Terms carefully. We reserve the right to change this Site and these Terms at any time. If you are unwilling to be bound by these Terms‚ you should not browse, access‚ use‚ register for or purchase merchandise from the Site. You represent and warrant that you are at least 18 years old or visiting this Site under the supervision of a parent or guardian.You represent and warrant that you are at least 18 years old or visiting this Site under the supervision of a parent or guardian.</p>
        <h3>Privacy Policy</h3>
        <p>Our Privacy Policy, which also governs your visit to Our Site, can be found at Privacy Policy. Please review our Privacy Policy for information on how We collect, use and share information about our users.</p>
        <h3>Use of This Site</h3>
        <p>
          Subject to your compliance with these Terms‚ We grant you a limited‚ non-exclusive‚ non-transferable‚ non-sublicensable license to access and make personal‚ non-commercial use of this Site. This license grant does not include: (a) any resale or commercial use of this Site or content therein; (b) the collection and use of any product listings or descriptions; (c) making derivative uses of this Site and its contents; or (d) use of any data mining‚ robots‚ or similar data gathering and extraction methods on this Site. You may not use‚ frame or utilize framing techniques to enclose any of Our trademark‚ logo‚ content or other proprietary information (including the images found at this Site‚ the content of any text or the layout/design of any page or form contained on a page) without Our express written consent. Further‚ you may not use any meta tags or any other “hidden text” utilizing Our name‚ trademark‚ or product name without Our express written consent. Any breach of these Terms shall result in the immediate revocation of the license granted in this paragraph without notice to you. You are granted a limited, revocable, and nonexclusive right to create a hyperlink to the homepage of this Site so long as the link does not portray Us or Our products or services in a false, misleading, derogatory, or otherwise offensive matter. This limited right may be revoked at any time. You may not use any of Our logos or other proprietary graphics or trademarks as part of the link without express written permission.
        </p>
        <h3>Feedback</h3>
        <p>Separate and apart from User Content, you may have the ability to submit questions, comments suggestions, reviews, ideas, plans, designs, notes, proposals, drawings, original or creative materials and other information regarding this Site, Us and our products or services (collectively “Feedback”). You agree that Feedback is non-confidential and shall become Our sole property. We shall own exclusive rights, including all intellectual property rights, in and to such Feedback and shall be entitled to the unrestricted use and dissemination of the Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you.
        </p>
        <h3>Questions</h3>
        <p>Questions regarding these Terms, Our Privacy Policy, or other policy related material can be directed to our 
          support staff by emailing us at: <a href="mailto:support@xtyles.in">support@xtyles.in</a>.
        </p>
      </div>
      <Newsletter/>
      <Footer/>

    </>
  )
};



export default Terms;
