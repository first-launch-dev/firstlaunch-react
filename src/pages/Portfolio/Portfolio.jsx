import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import VideoPlayer from "./VideoPlayer";

import video1 from "../../assets/videos/first-launch-video-for-collaborators.mp4";



import img1 from "../../assets/images/flyers/banner/1.jpg";
import img2 from "../../assets/images/flyers/banner/2.jpg";
import img3 from "../../assets/images/flyers/banner/3.jpg";
import img4 from "../../assets/images/flyers/banner/4.jpg";
import img5 from "../../assets/images/flyers/banner/5.jpg";
import img6 from "../../assets/images/flyers/banner/6.jpg";
import img7 from "../../assets/images/flyers/banner/7.jpg";
import img8 from "../../assets/images/flyers/banner/8.jpg";
import img9 from "../../assets/images/flyers/banner/9.jpg";
import img10 from "../../assets/images/flyers/banner/10.jpg";
import img11 from "../../assets/images/flyers/banner/11.jpg";
import img12 from "../../assets/images/flyers/banner/12.jpg";
import img13 from "../../assets/images/flyers/banner/13.jpg";
import img14 from "../../assets/images/flyers/banner/14.jpg";
import img15 from "../../assets/images/flyers/banner/15.jpg";
import img16 from "../../assets/images/flyers/banner/16.jpg";
import img17 from "../../assets/images/flyers/banner/17.jpg";
import img18 from "../../assets/images/flyers/banner/18.jpg";
import img19 from "../../assets/images/flyers/banner/19.jpg";
import img20 from "../../assets/images/flyers/banner/20.jpg";
import img21 from "../../assets/images/flyers/banner/21.jpg";
import img22 from "../../assets/images/flyers/banner/22.jpg";
import img23 from "../../assets/images/flyers/banner/23.jpg";
import img24 from "../../assets/images/flyers/banner/24.jpg";
import img25 from "../../assets/images/flyers/banner/25.jpg";
import img26 from "../../assets/images/flyers/banner/26.jpg";
import img27 from "../../assets/images/flyers/banner/27.jpg";
import img28 from "../../assets/images/flyers/banner/28.jpg";
import img29 from "../../assets/images/flyers/banner/29.jpg";
import img30 from "../../assets/images/flyers/banner/30.jpg";
import img31 from "../../assets/images/flyers/banner/31.jpg";
import img32 from "../../assets/images/flyers/banner/32.jpg";
import img33 from "../../assets/images/flyers/banner/33.jpg";
import img34 from "../../assets/images/flyers/banner/34.jpg";
import img35 from "../../assets/images/flyers/banner/35.jpg";
import img36 from "../../assets/images/flyers/banner/36.jpg";
import img37 from "../../assets/images/flyers/banner/37.jpg";
import img38 from "../../assets/images/flyers/banner/38.jpg";
import img39 from "../../assets/images/flyers/banner/39.jpg";
import img40 from "../../assets/images/flyers/banner/40.jpg";
import img41 from "../../assets/images/flyers/banner/41.jpg";
import img42 from "../../assets/images/flyers/banner/42.jpg";
import img43 from "../../assets/images/flyers/banner/43.jpg";
import img44 from "../../assets/images/flyers/banner/44.jpg";
import img45 from "../../assets/images/flyers/banner/45.jpg";
import img46 from "../../assets/images/flyers/banner/46.jpg";
import img47 from "../../assets/images/flyers/banner/47.jpg";
import img48 from "../../assets/images/flyers/banner/48.jpg";
import img49 from "../../assets/images/flyers/banner/40.jpg";
import img50 from "../../assets/images/flyers/banner/50.jpg";
import img51 from "../../assets/images/flyers/banner/51.jpg";
import img52 from "../../assets/images/flyers/banner/52.jpg";
import img53 from "../../assets/images/flyers/banner/53.jpg";
import img54 from "../../assets/images/flyers/banner/54.jpg";
import img55 from "../../assets/images/flyers/banner/55.jpg";
import img56 from "../../assets/images/flyers/banner/56.jpg";
import img57 from "../../assets/images/flyers/banner/57.jpg";
import img58 from "../../assets/images/flyers/banner/58.jpg";
import img59 from "../../assets/images/flyers/banner/59.jpg";
import img60 from "../../assets/images/flyers/banner/60.jpg";

//import Masonry from '@mui/lab/Masonry'

const MainSection = styled("div")(({ theme }) => ({
  paddingTop: "12rem",
  paddingBottom: "10rem",
}));

const CustomBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
  justifyContent:"center",
  alignItems:"center",
  "& .playerBox": {
    maxWidth: "17.979rem",
    "& .player": {
      width: "100%",
    },
  },
}));

const PictureSection = styled("div")(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"1rem",
  marginBottom:"1rem",
  "& .images":{
    width:"17.979rem",
    height:"19rem",
  }
  
    }));

function Portfolio() {
  return (
    <Box sx={{ bgcolor: "background.secondary" }}>
      <Container>
        <MainSection>
          <CustomBox>
            <Box className="playerBox">
              {" "}
              <Box
                maxWidth={"100%"}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 100,
                }}
              >
                <VideoPlayer
                  src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                />
              </Box>
            </Box>
            <Box className="playerBox">
              {" "}
              <Box
                maxWidth={"100%"}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 100,
                }}
              >
                <VideoPlayer
                  src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                />
              </Box>
            </Box>
            <Box className="playerBox">
              {" "}
              <Box
                maxWidth={"100%"}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 100,
                }}
              >
                <VideoPlayer
                  src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                />
              </Box>
            </Box>
          </CustomBox>
          <PictureSection>
          <img src={img1} className="images" />
          <img src={img2} className="images" />
          <img src={img3} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img4} className="images" />
          <img src={img5} className="images" />
          <img src={img6} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img7} className="images" />
          <img src={img8} className="images" />
          <img src={img9} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img10} className="images" />
          <img src={img11} className="images" />
          <img src={img12} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img13} className="images" />
          <img src={img14} className="images" />
          <img src={img15} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img16} className="images" />
          <img src={img17} className="images" />
          <img src={img18} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img19} className="images" />
          <img src={img20} className="images" />
          <img src={img21} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img22} className="images" />
          <img src={img23} className="images" />
          <img src={img24} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img25} className="images" />
          <img src={img26} className="images" />
          <img src={img27} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img28} className="images" />
          <img src={img29} className="images" />
          <img src={img30} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img31} className="images" />
          <img src={img32} className="images" />
          <img src={img33} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img34} className="images" />
          <img src={img35} className="images" />
          <img src={img36} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img37} className="images" />
          <img src={img38} className="images" />
          <img src={img39} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img40} className="images" />
          <img src={img41} className="images" />
          <img src={img42} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img43} className="images" />
          <img src={img44} className="images" />
          <img src={img45} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img46} className="images" />
          <img src={img47} className="images" />
          <img src={img48} className="images" />
          </PictureSection>
          <PictureSection>
          <img src={img49} className="images" />
          <img src={img50} className="images" />
          <img src={img51} className="images" />
          </PictureSection>
          <CustomBox>
          <Box className="playerBox">
            {" "}
            <Box
              maxWidth={"100%"}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
              }}
            >
              <VideoPlayer
                src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </Box>
          </Box>
          <Box className="playerBox">
            {" "}
            <Box
              maxWidth={"100%"}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
              }}
            >
              <VideoPlayer
                src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </Box>
          </Box>
          <Box className="playerBox">
            {" "}
            <Box
              maxWidth={"100%"}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
              }}
            >
              <VideoPlayer
                src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </Box>
          </Box>
        </CustomBox>
        <PictureSection>
        <img src={img52} className="images" />
        <img src={img53} className="images" />
        <img src={img54} className="images" />
        </PictureSection>
        <PictureSection>
        <img src={img55} className="images" />
        <img src={img56} className="images" />
        <img src={img57} className="images" />
        </PictureSection>
        <PictureSection>
        <img src={img58} className="images" />
        <img src={img59} className="images" />
        <img src={img60} className="images" />
        </PictureSection>
        </MainSection>
      </Container>
    </Box>
  );
}

export default Portfolio;
