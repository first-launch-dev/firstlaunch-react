import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PortfolioService from "services/portfolio.service";

//import Masonry from '@mui/lab/Masonry'

const MainSection = styled("div")(({ theme }) => ({
  paddingTop: "12rem",
  paddingBottom: "10rem",
}));

const CustomBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
  justifyContent: "center",
  alignItems: "center",
  "& .playerBox": {
    maxWidth: "17.979rem",
    "& .player": {
      width: "100%",
    },
  },
}));

const PictureSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    maxWidth: "46.875rem",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "19.375rem",
  },
  "& .images": {
    width: "17.979rem",
    height: "19rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "14.25rem",
      height: "17rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "5.25rem",
      height: "10rem",
    },
  },
}));

function Portfolio() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    async function fetchPortfolio() {
      await PortfolioService.fetchAll().then((response) => {
        setData(response.data.data);
      });
      setIsFetching(false);
    }
    fetchPortfolio();
  }, []);

  return (
    <Box sx={{ bgcolor: "background.secondary" }}>
      <Container maxWidth="lg">
        <MainSection>
          {!isFetching ? (
            <>
              {data.length > 0 ? (
                <PictureSection>
                  {data.map((item, index) => (
                    <img
                      src={item?.path}
                      alt={item?.name}
                      key={index}
                      className="images"
                    />
                  ))}
                </PictureSection>
              ) : (
                <Typography variant="h5" color="white">
                  No Image
                </Typography>
              )}
            </>
          ) : (
            <Typography variant="h5" color="white">
              Loading...
            </Typography>
          )}
        </MainSection>
      </Container>
    </Box>
  );
}

export default Portfolio;
