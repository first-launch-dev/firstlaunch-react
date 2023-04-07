import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, Typography, Box, Divider, List, ListItem } from "@mui/material";
import CustomButton from "../components/button";
import styled from "styled-components";
import { useNavigate } from "react-router";

const btnSX = {
  "&:hover": {
    border: "1px solid #fb8c22",
    color: "#222",
    backgroundColor: "#fb8c22",
  },
  "&:active": {
    border: "1px solid #fb8c22",
    color: "#222",
    backgroundColor: "#fb8c22",
  },
};

const renderListItems = (forPackage) => {
  let abc = (
    <List sx={{ textAlign: "center" }}>
      {forPackage.unmuted.map((y, idxx) => {
        <ListItem index={idxx}>{y}</ListItem>;
        {
          console.log("y >> ", idxx, y);
        }
      })}
    </List>
  );
  return abc;
};

const ListItemsArr = [
  <>
    <ListItem>Professional Audio Recording (3-5 Minute Audio)</ListItem>
    <ListItem>Or 3 Hours Shoot for Short Video (1 to 2 Minute Video)</ListItem>
    <ListItem>+ Professional Photographic</ListItem>
    <ListItem>HD Camera</ListItem>
    <ListItem>Professional Audio</ListItem>
    <ListItem>Voiceover</ListItem>
    <ListItem>Motion Graphics</ListItem>
    <ListItem>Storyboards</ListItem>
    <ListItem>2D Animation</ListItem>
    <ListItem>Audio Effects</ListItem>
    <ListItem>Licensed Music</ListItem>
    <ListItem>Multiple Rounds of Revisions</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Location Rental</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Actor and Actresses</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Professional Director on Shoot</ListItem>
      <ListItem sx={{opacity:'0.45'}}>High-End Cinematographer</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Expanded Filming Crew</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Music Clearances / Custom Music</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Stock Shots (Video or Photos)</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Licensed Stock Music & Video</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Professional Videographer</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Text & Graphics</ListItem>
      <ListItem sx={{opacity:'0.45'}}>2 rounds (Editing & Revisions)</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Up to (5) Stock Shots (Video or Photos) Included</ListItem>
  </>,
  <>
    <ListItem>Short Professional Video</ListItem>
    <ListItem>+ Half Day Shoot for one Video (3 to 5 Minutes Video)</ListItem>
    <ListItem>Professional Photographic</ListItem>
    <ListItem>HD Camera</ListItem>
    <ListItem>Additional Professional Audio</ListItem>
    <ListItem>Licensed Stock Music & Video</ListItem>
    <ListItem>Professional Videographer</ListItem>
    <ListItem>Text & Graphics</ListItem>
    <ListItem>Limited Editing & Revisions</ListItem>
    <ListItem>Stock Shots (Video or Photos)</ListItem>
    <ListItem>Voiceover (as needed)</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Location Rental</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Actor and Actresses</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Professional Director on Shoot</ListItem>
      <ListItem sx={{opacity:'0.45'}}>High-End Cinematographer</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Expanded Filming Crew</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Music Clearances / Custom Music</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Stock Shots (Video or Photos)</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Motion Graphics</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Storyboards</ListItem>
      <ListItem sx={{opacity:'0.45'}}>2D Animation</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Audio Effects</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Licensed Music</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Multiple Rounds of Revisions</ListItem>
  </>,
  <>
    <ListItem>Long Professional Video</ListItem>
    <ListItem>Full Day Shoot</ListItem>
    <ListItem>Professional Photographic</ListItem>
    <ListItem>HD Camera</ListItem>
    <ListItem>Additional Professional Audio</ListItem>
    <ListItem>Licensed Stock Music & Video</ListItem>
    <ListItem>Professional Videographer</ListItem>
    <ListItem>Text & Graphics</ListItem>
    <ListItem>Stock Shots(Video or Photos)</ListItem>
    <ListItem>Unlimited Editing & Revisions</ListItem>
    <ListItem>Voice Over Talent</ListItem>
    <ListItem>Motion Graphics Templates</ListItem>
    <ListItem>Storyboards</ListItem>
    <ListItem>2D Animations</ListItem>
    <ListItem>Audio Effects</ListItem>
    <ListItem>Licensed Music</ListItem>
    <ListItem>Multiple Rounds of Revisions</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Location Rental</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Actor and Actresses</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Professional Director on Shoot</ListItem>
      <ListItem sx={{opacity:'0.45'}}>High-End Cinematographer</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Expanded Filming Crew</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Music Clearances / Custom Music</ListItem>
      <ListItem sx={{opacity:'0.45'}}>Stock Shots (Video or Photos)</ListItem>
  </>,
  <>
    <ListItem>Professional Video</ListItem>
    <ListItem>Casting + Script Writing</ListItem>
    <ListItem>+ Professional Photographic</ListItem>
    <ListItem>HD &amp; 4K Camera</ListItem>
    <ListItem>Location Rental</ListItem>
    <ListItem>Actor and Actresses</ListItem>
    <ListItem>Professional Director on Shoot</ListItem>
    <ListItem>High-End Cinematographer</ListItem>
    <ListItem>Expanded Filming Crew</ListItem>
    <ListItem>Music Clearances / Custom Music</ListItem>
    <ListItem>Stock Shots (Video or Photos)</ListItem>
    <ListItem>Additional Professional Audio</ListItem>
    <ListItem>Licensed Stock Music &amp; Video</ListItem>
    <ListItem>Professional Videographer</ListItem>
    <ListItem>Text &amp; Graphics</ListItem>
    <ListItem>Unlimited Editing &amp; Revisions</ListItem>
    <ListItem>Stock shots (Video or Photos)</ListItem>
    <ListItem>Voiceover Talent</ListItem>
    <ListItem>Custom Motion Graphics</ListItem>
    <ListItem>Art Direction / Illustration</ListItem>
    <ListItem>Story boards</ListItem>
    <ListItem>2D Animation</ListItem>
    <ListItem>Audio Effects</ListItem>
    <ListItem>Licensed Music</ListItem>
    <ListItem>Multiple Rounds of Revisions</ListItem>
  </>,
];

const pricingData = [
  {
    packageName: "Basic",
    serviceName: "One Tool Service",
    price: 4880,
    description: [
      {
        unmuted: [
          "Professional Audio Recording (3-5 Minute Audio)",
          "Or 3 Hours Shoot for Short Video (1 to 2 Minute Video)",
          "+ Professional Photographic",
          "HD Camera",
          "Professional Audio",
          "Voiceover",
          "Motion Graphics",
          "Storyboards",
          "2D Animation",
          "Audio Effects",
          "Licensed Music",
          "Multiple Rounds of Revisions",
          "Location Rental",
          "Actor and Actresses",
          "Professional Director on Shoot",
          "High-End Cinematographer",
          "Expanded Filming Crew",
          "Music Clearances / Custom Music",
          "Stock Shots (Video or Photos)",
          "Licensed Stock Music & Video",
          "Professional Videographer",
          "Text & Graphics",
          "2 rounds (Editing & Revisions)",
          "Up to (5) Stock Shots (Video or Photos) Included",
        ],
      },
    ],
  },
  {
    packageName: "Express",
    serviceName: "Two Tools Service",
    price: 9880,
    description: [
      {
        unmuted: [
          "Professional Audio Recording (3-5 Minute Audio)",
          "Or 3 Hours Shoot for Short Video (1 to 2 Minute Video)",
          "+ Professional Photographic",
          "HD Camera",
          "Professional Audio",
          "Voiceover",
          "Motion Graphics",
          "Storyboards",
          "2D Animation",
          "Audio Effects",
          "Licensed Music",
          "Multiple Rounds of Revisions",
          "Location Rental",
          "Actor and Actresses",
          "Professional Director on Shoot",
          "High-End Cinematographer",
          "Expanded Filming Crew",
          "Music Clearances / Custom Music",
          "Stock Shots (Video or Photos)",
          "Licensed Stock Music & Video",
          "Professional Videographer",
          "Text & Graphics",
          "2 rounds (Editing & Revisions)",
          "Up to (5) Stock Shots (Video or Photos) Included",
        ],
      },
    ],
  },
  {
    packageName: "Super",
    serviceName: "Two Tools Service",
    price: 14880,
    description: [
      {
        unmuted: [
          "Long Professional Video",
          "Full Day Shoot",
          "Professional Photographic",
          "HD Camera",
          "Additional Professional Audio",
          "Licensed Stock Music & Video",
          "Professional Videographer",
          "Text & Graphics",
          "Stock Shots(Video or Photos)",
          "Unlimited Editing & Revisions",
          "Voice Over Talent",
          "Motion Graphics Templates",
          "Storyboards",
          "2D Animations",
          "Audio Effects",
          "Licensed Music",
          "Multiple Rounds of Revisions",
        ],
      },
      {
        muted: [
          "Location Rental",
          "Actor and Actresses",
          "Professional Director on Shoot",
          "High-End Cinematographer",
          "Expanded Filming Crew",
          "Music Clearances / Custom Music",
          "Stock Shots (Video or Photos)",
        ],
      },
    ],
  },
  {
    packageName: "Premium",
    serviceName: "Professional Service (Custom)",
    price: "19980",
    description: [
      {
        unmuted: [
          "Professional Video",
          "Casting + Script Writing",
          "+ Professional Photographic",
          "HD & 4K Camera",
          "Location Rental",
          "Actor and Actresses",
          "Professional Director on Shoot",
          "High-End Cinematographer",
          "Expanded Filming Crew",
          "Music Clearances / Custom Music",
          "Stock Shots (Video or Photos)",
          "Additional Professional Audio",
          "Licensed Stock Music & Video",
          "Professional Videographer",
          "Text & Graphics",
          "Unlimited Editing & Revisions",
          "Stock shots (Video or Photos)",
          "Voiceover Talent",
          "Custom Motion Graphics",
          "Art Direction / Illustration",
          "Story boards",
          "2D Animation",
          "Audio Effects",
          "Licensed Music",
          "Multiple Rounds of Revisions",
        ],
      },
    ],
  },
];






function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState(5);
  const [listitms, setListitms] = useState(<></>);

  const handlePackageClick = (index) => {
    setSelectedPackage(index);
  };
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate('/booking')
  }
  return (
    <Box sx={{ bgcolor: "background.secondary" }}>
    <Container>
      <Grid container py={20} spacing={3}>
        {pricingData.map((x, index) => (
          <Grid item sm={12} md={6} lg={3} key={index}>
            <Box
              sx={{
                textAlign: "center",
                border: "1px solid #fb8c00",
                p: 2,
                // background: selectedPackage === index ? "#212121" : "",
                opacity: selectedPackage === index ? 1 : 0.4,
                transform:
                  selectedPackage === index ? "scaleX(1.12) scaleY(1.04)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => handlePackageClick(index)}
            >
              <Box sx={{ m: 2 }}>
                <Typography variant="h3" sx={{ mb: 1, }}>
                  {x.packageName}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  {x.serviceName}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {x.price} / SAR
                </Typography>
              </Box>
              <Divider sx={{ mb: 2,  }} />

              {/* {renderListItems(x.description[0])} */}
              <List sx={{ textAlign: "center", justifyContent:"center", alignItems:"center" }}>{ListItemsArr[index]}</List>
              <CustomButton
              onClick={onClickHandler}
                text="get started"
                color="#db8c00"
                textColor="#222"
                customSx={btnSX}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}

export default Pricing;