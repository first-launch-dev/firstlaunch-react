import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../assets/images/about-page-img.jpg";
import facebook from "../../assets/icons/social-media/facebook.png";
import twitter from "../../assets/icons/social-media/whatsapp.png";
import whatsapp from "../../assets/icons/social-media/twitter.png";
import styled from "@emotion/styled";
// import useStyles from "./styles";

const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItem: "center",
  gap:"1rem",
  [theme.breakpoints.down("md")]:{
    gap:"0rem",
    flexDirection:"column-reverse",
  },
  "& .section": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    "& .heading": {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    "& .paragraph":{
      fontSize: "0.875rem",
      fontWeight: "400",
      [theme.breakpoints.down("md")]:{
        maxWidth:"45.5rem",
      },
    },
    "& .subheading":{
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    "& .mediabox":{
      display:"flex",
    alignItem:"center",
    gap:"2rem",
      "& .socialLink":{
        width: "1.5rem",
      }
    },
  },
  "& .pictureSection":{
    maxWidth:"40.5rem",
    [theme.breakpoints.down("md")]:{
      maxWidth:"45.5rem",
    },
  }
}));



const AboutUs = () => {
  return (
    <>
      <Box sx={{ bgcolor: "background.secondary" }} pt={8} pb={12}>
        <Container maxWidth="lg">
          <MainSection>
            <Box container className="section" pt={10}>
              <Typography className="heading">
                We are{" "}
                <span
                  style={{
                    fontWeight: "800",
                    borderBottom: "3px solid #fb8c00 ",
                  }}
                >
                  {" "}
                  First Launch{" "}
                </span>
                Lit. Co. for Artistic
              </Typography>
              <Typography className="paragraph">
                It is a Saudi company registered with Commercial Registry No.
                4030381541 and licensed by the General Entertainment Authority
                to support and develop artistic and entertainment talents with
                license No. 2012070106, as its work depends on specialized
                artistic production in the audiovisual field, as it’s managing
                all production processes form its operational office that is
                located at EMAAR Square “Jeddah Gate”.
              </Typography>
              <Typography className="paragraph" paddingBottom="2rem">
                The company provides modern solutions in the artistic and
                cinematic field, relying on designing its services on the
                talents of customers by offering competitive prices in the
                artistic and modelling, the first launch platform is a coming
                revolution in the packages of modern media classification, which
                will be a quantum leap in the privatization of the productive
                field, through the automation of services Based on the needs and
                desires based on the talents of customers while providing easy
                and accessible solutions for the customer in the field of
                artistic talent and entertainment in the Kingdom of Saudi
                Arabia.
              </Typography>
              <Typography
             
                className="subheading"
              >
                Give us a shout out
              </Typography>

              <Box className="mediabox">
              <a onClick={() => window.open("https://wa.me/+966569652777")}>
              <img src={twitter} className="socialLink" />
            </a>
              
                <a href="https://www.facebook.com/first_launch/">
                  <img src={facebook} className="socialLink" />
                </a>
                <a href="https://twitter.com/first_launch">
                <img src={whatsapp} className="socialLink" />
              </a>
              </Box>

              
            </Box>
            <Box className="pictureSection" pt={11}>
                <img src={bannerImage} alt="bannerImage" width="100%" />
              </Box>
          </MainSection>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
