import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import img from "../../assets/images/contact-page-img.jpg";
import facebook from "../../assets/icons/social-media/facebook.png";
import twitter from "../../assets/icons/social-media/whatsapp.png";
import whatsapp from "../../assets/icons/social-media/twitter.png";
import CustomButton from "../../components/button";
import map from "../../assets/images/map.png";
import styled from "@emotion/styled";

const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  paddingBottom: "3rem",
  paddingTop: "12rem",
  [theme.breakpoints.down("md")]:{
    flexDirection:"column",
    paddingBottom: "0rem",
    paddingTop: "7rem",
  },
  "& .imageBox":{
    maxWidth:"40.5rem",
    [theme.breakpoints.down("md")]:{
    maxWidth:"45.5rem",
    }
  }
}));

const CustomBox = styled("div")(({ theme }) => ({
  "& .Heading": {
    marginBottom: "1rem",
    "& .underHeading": {
      fontSize: "1.5rem",
      borderBottom: "1px solid #fb8c00",
    },
  },
  "& .para": {
    fontSize: "0.875rem",
    fontWeight: "400",
    marginBottom: "0.75rem",
  },
  "& .subHeading": {
    fontSize: "1.5rem",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

const MediaBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  "& .socialLink": {
    width: "1.5rem",
  },
}));

const FormSection = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10rem",
  marginBottom: "10rem",
  maxWidth: "44.313rem",
  backgroundColor:"background.paper !important",
  borderRadius:"0.25rem",
  "& .form": {
    padding: "3rem",
    border: "1px solid transparent",
    borderRadius: "0.25rem",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
    "& .formheading":{
      fontSize:"1.5rem",
      marginBottom:"1.5rem",
      fontWeight:"400",
      "& .bolder":{
        borderBottom:"1px solid #fb8c00"
      }
    },
  },

}));

const FormBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.25rem",
  backgroundColor:"background.paper",
  "& .borderColor":{
    borderColor:"transparent",
  }
}));

const MapBox = styled("div")(({ theme }) => ({
  marginTop: "3rem",
  paddingBottom: "10rem",
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
}));

const LaunchWithUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //   const mapRef = useRef(null); // reference to the map div element
  //   const apiKey = "AIzaSyDrQxRBGiXUtlvOS6ItXz9w8VWZ7dgZ4Sk" ; // replace with your Google Maps API key

  //   useEffect(() => {
  //     // load the Google Maps API
  //     const script = document.createElement("script");
  //     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
  //     script.onload = initMap;
  //     document.head.appendChild(script);

  //     // initialize the map
  //     const initMap = () => {
  //       const map = new window.google.maps.Map(mapRef.current, {
  //         center: { lat: 37.7749, lng: -122.4194 }, // default to San Francisco
  //         zoom: 8 // set the zoom level
  //       });

  //       // add a marker to the map
  //       const marker = new window.google.maps.Marker({
  //         position: { lat: 37.7749, lng: -122.4194 },
  //         map: map,
  //         title: "San Francisco"
  //       });
  //     };

  //     // clean up the script tag
  //     return () => {
  //       document.head.removeChild(script);
  //     };
  //   }, [apiKey]);

  return (
    <>
      <Box sx={{ bgcolor: "background.overlay" }}>
        <Container>
          <MainSection>
            <Box className="imageBox">
              <img src={img} width="100%" />
            </Box>
            <CustomBox>
              <Typography className="Heading">
                <span className="underHeading">Contact us directly</span>
              </Typography>
              <Typography className="para">
                We believe in your talent, and together we are making your first
                start, and your needs may be different
              </Typography>
              <Typography className="para">
                The direct communication service with us through all available
                channels will bring us closer to understanding your interests,
                needs and the level that you aspire to, through our experience
                in the artistic and entertainment production market; We have
                designed easy and flexible service packages for all needs and
                talents, so that we provide professional solutions and services
                at competitive prices and suitable for all groups with
                distinctive service packages that suit all the needs of our
                customers.
              </Typography>
              <Typography className="subHeading">
                Give us a shout out
              </Typography>
              <MediaBox>
              <a onClick={() => window.open("https://wa.me/+966569652777")}>
              <img
                src={twitter}
                className="socialLink"
              />
            </a>
               
                <a href="https://www.facebook.com/first_launch/">
                  <img
                    src={facebook}
                    className="socialLink"
                  />
                </a>
                <a href="https://twitter.com/first_launch">
                  <img
                    src={whatsapp}
                    className="socialLink"
                  />
                </a>
              </MediaBox>
            </CustomBox>
          </MainSection>

          <FormSection>
          <form className="form" onSubmit={handleSubmit}>
          <Typography className="formheading"><span  className="bolder">Contact us directly</span></Typography>
              <FormBox>
                <TextField
                  id="outlined-basic"
                  label="Email*"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Name*"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={6}
                />
                <CustomButton
                className="borderColor"
                  textColor="#767676"
                  color="background.overlay"
                  text="Submit"
                  type="submit"
                ></CustomButton>
              </FormBox>
            </form>
          </FormSection>
          <MapBox>
            {/*<div ref={mapRef} style={{ width: "100%", height: "500px" }} />*/}
            <Box>
              <img src={map} width="100%" />
            </Box>
          </MapBox>
        </Container>
      </Box>
    </>
  );
};

export default LaunchWithUs;
