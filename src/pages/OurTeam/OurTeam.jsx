import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/team/Abdullah Alnashri/1.png";
import img2 from "../../assets/images/team/Adel Zaki/2.png";
import img3 from "../../assets/images/team/Ahmad Qandil/3.png";
import img4 from "../../assets/images/team/Elaf Saab/5.png";
import img5 from "../../assets/images/team/Fatmah Alamoudi/6.png";
import img6 from "../../assets/images/team/Hassan Basrawi/7.png";
import img7 from "../../assets/images/team/Hayfa Hussain/8.png";
import img8 from "../../assets/images/team/Majed Aldossari/10.png";
import img9 from "../../assets/images/team/Maram/11.png";
import img10 from "../../assets/images/team/Marwan Alshehri/13.png";
import img11 from "../../assets/images/team/Nesreen/14.png";
import img12 from "../../assets/images/team/Osama Bugis/15.png";
import img13 from "../../assets/images/team/Rafal Qassem/16.png";
import img14 from "../../assets/images/team/Rawan Abdullah/17.png";
import img15 from "../../assets/images/team/Rawan Hussain/18.png";
import img16 from "../../assets/images/team/Saleh Kashogji/19.png";
import img17 from "../../assets/images/team/Shahad Bajaafar/20.png";
import img18 from "../../assets/images/team/Turkan Alayoubi/21.png";

const MainSection = styled("div")(({ theme }) => ({
  paddingTop: "12rem",
  paddingBottom: "10rem",
  "& .gridLayout": {
    marginTop: "5rem",
  },
  "& .heading": {
    fontSize: "2.125rem",
    fontWeight: "400",
    padding: "0.5rem",
    margin: "1rem 1rem 1rem 1rem",
    textAlign: "center",
    "& .underheading": {
      borderBottom: "3px solid #fb8c00",
    },
  },
  "& .images": {
    maxWidth: "21rem",
    marginLeft:"auto",
    marginRight:"auto",

  },
  "& .name": {
    textAlign: "center",
    paddingTop: "1rem",
    fontSize: "1.25rem",
    paddingBottom: "0.5rem",
  },
  "& .desig": {
    fontSize: "1rem",
    color: "#6c757d",
    textAlign: "center",
  },
}));

const OurTeam = () => {
  return (
    <>
      <Box sx={{ bgcolor: "background.secondary" }}>
        <Container>
          <MainSection>
            <Typography className="heading">
              <span className="underheading">Our Team</span>
            </Typography>
            <Grid container spacing={3} className="gridLayout">
              <Grid item xs={12} md={6} lg={4}>
                <img className="images" src={img1} alt="team" />
                <Typography className="name">Abdullah Mohammed-SAMT</Typography>
                <Typography className="desig">Composer</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <img className="images" src={img2} alt="team" />
                <Typography className="name">Adel Zaki</Typography>
                <Typography className="desig">Director</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <img className="images" src={img3} alt="team" />
                <Typography className="name">Ahmad Qandil</Typography>
                <Typography className="desig">Assistant Director</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} className="gridLayout">
            <Grid item xs={12} md={6} lg={4}>
              <img className="images" src={img4} alt="team" />
              <Typography className="name">Elaf Saab</Typography>
              <Typography className="desig">Photographer & Video</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <img className="images" src={img5} alt="team" />
              <Typography className="name">Fatmah Alamoudi</Typography>
              <Typography className="desig">Make-up Artist</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <img className="images" src={img6} alt="team" />
              <Typography className="name">Hassan Basrawi</Typography>
              <Typography className="desig">Model</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="gridLayout">
          <Grid item xs={12} md={6} lg={4}>
            <img className="images" src={img7} alt="team" />
            <Typography className="name">Hayfa Hussain</Typography>
            <Typography className="desig">Photographer & Video</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <img className="images" src={img8} alt="team" />
            <Typography className="name">Majed Aldossari</Typography>
            <Typography className="desig">Musician</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <img className="images" src={img9} alt="team" />
            <Typography className="name">Maram Qadi</Typography>
            <Typography className="desig">Model</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="gridLayout">
        <Grid item xs={12} md={6} lg={4}>
          <img className="images" src={img10} alt="team" />
          <Typography className="name">Marwan Alshehri</Typography>
          <Typography className="desig">Singer</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <img className="images" src={img11} alt="team" />
          <Typography className="name">Nesreen</Typography>
          <Typography className="desig">Make-up Artist</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <img className="images" src={img12} alt="team" />
          <Typography className="name">Osama Bugis</Typography>
          <Typography className="desig">Singer</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="gridLayout">
      <Grid item xs={12} md={6} lg={4}>
        <img className="images" src={img13} alt="team" />
        <Typography className="name">Rafal Qassem</Typography>
        <Typography className="desig">Photographer & Video</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <img className="images" src={img14} alt="team" />
        <Typography className="name">Rawan Abdullah</Typography>
        <Typography className="desig">Model</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <img className="images" src={img15} alt="team" />
        <Typography className="name">Rawan Hussain</Typography>
        <Typography className="desig">Photographer & Video</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={3} className="gridLayout">
    <Grid item xs={12} md={6} lg={4}>
      <img className="images" src={img16} alt="team" />
      <Typography className="name">Saleh Kashogji</Typography>
      <Typography className="desig">Musician & Guitarist</Typography>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <img className="images" src={img17} alt="team" />
      <Typography className="name">Shahad Bajaafar</Typography>
      <Typography className="desig">Musician & Pianist</Typography>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <img className="images" src={img18} alt="team" />
      <Typography className="name">Turkan Alayoubi</Typography>
      <Typography className="desig">Actor & Dance Instructor</Typography>
    </Grid>
  </Grid>
          </MainSection>
        </Container>
      </Box>
    </>
  );
};

export default OurTeam;
