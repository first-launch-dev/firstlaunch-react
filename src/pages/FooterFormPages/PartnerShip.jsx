import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import CustomButton from "../../components/button";

const CustomBox = styled("div")(({ theme }) => ({
  paddingTop: "10rem",
  paddingBottom: "8rem",
  maxWidth: "47.25rem",
  marginLeft: "auto",
  marginRight: "auto",

  "& .mainBox": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
    padding: "2.5rem",
  },
  "& .heading": {
    fontSize: "1.5rem",
    paddingBottom: "1.5rem",
    fontWeight: "500",
  },
  "& .btn-position": {
    display: "flex",
    gap: "2rem",
  },
}));

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

const PartnerShip = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/Individual-partnership");
  };
  const onClickHandler2 = () => {
    navigate("/Organization-partnership");
  };
  return (
    <>
      <Box sx={{ bgcolor: "background.secondary" }}>
        <Container>
          <CustomBox>
            <Box sx={{ bgcolor: "background.paper" }} className="mainBox">
              <Typography className="heading">I'm an:</Typography>
              <Box className="btn-position">
                <CustomButton
                  onClick={onClickHandler}
                  text="Individual"
                  color="#db8c00"
                  textColor="#222"
                  customSx={btnSX}
                />
                <CustomButton
                  onClick={onClickHandler2}
                  text="Organization"
                  color="#db8c00"
                  textColor="black"
                  customSx={btnSX}
                />
              </Box>
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </>
  );
};

export default PartnerShip;
