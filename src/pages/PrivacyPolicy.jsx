import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CustomBox = styled("div")(({ theme }) => ({
  paddingTop: "8rem",
  paddingBottom: "4rem",
  "& .heading": {
    fontSize: "2rem",
    color: "#fb8c00",
    paddingBottom: "1.5rem",
    fontWeight: "400",
  },
  "& .para": {
    fontSize: "0.875rem",
    paddingBottom: "0.75rem",
  },
}));

const PrivacyPolicy = () => {
  return (
    <>
      <Box sx={{ bgcolor: "background.secondary" }}>
        <Container>
          <CustomBox>
            <Typography className="heading">Privacy Policy</Typography>
            <Typography className="para">
              The privacy and confidentiality of the information described below
              is part of the terms of use of the website, if you choose to
              provide your information, we only use it to fulfill your request
              for information or services in accordance with what is stated in
              these policies, and by using the first-start platform, you agree
              to this privacy policy and confidentiality of information.
              Visitors to the site and the beneficiaries of its services must
              constantly review the terms and principles of privacy and
              confidentiality of information to know any updates made to them,
              noting that the site’s management is not required to announce any
              updates made to those terms and principles, and your use of the
              site means that you are aware of and agree to those terms and
              principles and what is done on them From constant adjustments.
              Intilaaqah al-Oula is not responsible under any circumstances
            </Typography>
            <Typography className="heading">
              Security of personal information
            </Typography>
            <Typography className="para">
              The privacy and confidentiality of information document has been
              prepared to help visitors, customers, and users understand the
              nature of the data that is collected from them when visiting the
              site and how to deal with it. Misuse, modification and
              unauthorized disclosure, and among the most important measures in
              place in the First Inception platform to protect the visitor's
              personal information: Strict procedures and measures to protect
              the security of information and the technology that we use to
              prevent fraud and unauthorized access to our systems. Regular and
              periodic update of protection procedures and controls That meet or
              exceed the standard criteria. Our employees are qualified and
              trained to respect the confidentiality of the personal information
              of our visitors.
            </Typography>
            <Typography className="heading">
              Collecting personal information
            </Typography>
            <Typography className="para">
              Once the user visits the platform site, the site’s server records
              the user’s IP address, the date and time of the visit, and the URL
              of any website from which you are referred to the first launch
              platform site.
              <br />
              <br />
              Most websites, as soon as they are visited, place a small file on
              the visitor’s hard drive (the browser). This file is called
              “cookies”, and cookies are text files, and these text files
              contain information that allows the site that deposited them to
              retrieve them When needed during the user's next visit to the
              site, and from this information saved.
              <br />
              <br />
              Remember username and password.
              <br />
              <br />
              Save page settings, if available on the portal.
              <br />
              <br />
              The browser (visitor) may not have to enter the password on every
              visit, as the site’s system will be able to discover it through
              cookies, or it may prevent the user from repeating the voting
              process if he has already voted and so on… On this basis, the site
              will use the existing information In cookies for technical
              purposes of their own, when visited more than once, and the site
              can change the information contained in the cookies files or add
              new information whenever you visit the first launch platform.
              <br />
              <br />
              If you use a direct application or send us an email via the
              website providing us with personal data, we may share the
              necessary data with other authorities or departments, in order to
              serve you more effectively, and we will not share your personal
              data with non-governmental entities unless they are from the
              authorized authorities It has from the competent authorities to
              perform specific government services. By submitting your data and
              personal information through the website, you fully agree to the
              storage, processing and use of that data by the Saudi authorities.
              We reserve the right at all times to disclose any information to
              the competent authorities, when it is necessary to comply with any
              law, regulation or governmental request.
              <br />
              <br />
              You are solely responsible for the completeness, correctness and
              truthfulness of the data that you send through this website.
            </Typography>
            <Typography className="heading">Protect your privacy</Typography>
            <Typography className="para">
              Do not give confidential information over the phone or the
              Internet unless you know the identity of the person or party
              receiving the information. Use a safe browser when you complete
              transactions over the Internet while closing unused applications
              on the network, and make sure that the virus protection program is
              always updated. For any inquiries or opinions about privacy
              principles, you can contact the site’s administration via the
              contact form on the Contact Us page. To preserve your personal
              data, electronic storage and personal data sent using appropriate
              security technologies are secured. This site may contain
              electronic links to websites or portals that may be used. Ways to
              protect information and its privacy differ from the methods used
              by us, and we are not responsible for the contents, methods and
              privacy of these other sites, and we advise you to refer to the
              privacy notices of those sites.
            </Typography>
            <Typography className="heading">Send email messages</Typography>
            <Typography className="para">
              When you inquire or request information about a specific service
              or in the event that you give additional information using any of
              the means of communication with the first start-up platform,
              whether electronic or non-electronic, such as requesting inquiries
              on our website, we will use your e-mail address to respond to your
              inquiries, as well as from It is possible to save your mail
              address, message, and our response to it for quality control
              purposes, and we may also do so for legal and regulatory purposes.
            </Typography>
          </CustomBox>
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
