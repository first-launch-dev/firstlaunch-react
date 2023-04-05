import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import Paper from '@mui/material/Paper';
//import Masonry from '@mui/lab/Masonry'

const MainSection = styled("div")(({ theme }) => ({
  paddingTop: "12rem",
  paddingBottom: "10rem",
}));


const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Portfolio() {
  return (
    <Box sx={{ bgcolor: "background.secondary" }}>
      <Container>
        <MainSection>
          <Typography variant="h1" component="h1">
            Portfolio
          </Typography>
          <Box sx={{ width: 500, minHeight: 393 }}>
          {/* <Masonry columns={4} spacing={2}>
            {heights.map((height, index) => (
              <Item key={index} sx={{ height }}>
                {index + 1}
              </Item>
            ))}
          </Masonry> */}
        </Box>
          
        </MainSection>
      </Container>
    </Box>
  );
}

export default Portfolio;
