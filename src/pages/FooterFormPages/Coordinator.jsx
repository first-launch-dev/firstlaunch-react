import { Container, Grid, MenuItem } from "@mui/material";
import { Box, TextField, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import React from "react";
import styled from "styled-components";
import CustomButton from "../../components/button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const MainSection = styled("div")(({ theme }) => ({
  paddingTop: "8rem",
  paddingBottom: "8rem",
}));

const FormSection = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10rem",
  marginBottom: "10rem",
  maxWidth: "44.313rem",
  backgroundColor: "background.paper",
  borderRadius: "0.25rem",
  "& .form": {
    padding: "3rem",
    border: "1px solid transparent",
    borderRadius: "0.25rem",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
    "& .formheading": {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
      fontWeight: "400",
      textAlign: "center",
    },
  },
}));

const FormBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.25rem",
  backgroundColor: "background.paper",
  "& .feildgroups": {
    display: "flex",
    gap: "1.25rem",
    width: "40.5rem",
    "& .feild": {
      maxWidth: "18.5rem",
      width: "100%",
    },
  },
  "& .borderColor": {
    borderBlockColor: "transparent",
  },
}));

const nationality = [
  {
    value: "pakistan",
    label: "pakistan",
  },
  {
    value: "india",
    label: "india",
  },
  {
    value: "canada",
    label: "canada",
  },
  {
    value: "germany",
    label: "germany",
  },
];

const Age = [
  {
    value: "18",
    label: "18",
  },
  {
    value: "19",
    label: "19",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "21",
    label: "21",
  },
];

const Coordinator = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email });
  };

  return (
    <>
      <Box sx={{ bgcolor: "background.secondary" }}>
        <Container>
          <MainSection>
            <FormSection>
              <Box sx={{ bgcolor: "background.paper" }}>
                <form className="form" onSubmit={handleSubmit}>
                  <Typography className="formheading">
                    {props.heading}
                  </Typography>
                  <FormBox>
                    <Typography>Account Information</Typography>
                    <Box className="feildgroups">
                      {" "}
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Name*"
                        variant="outlined"
                      />
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Email*"
                        variant="outlined"
                      />
                    </Box>
                    <Box className="feildgroups">
                      {" "}
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Password*"
                        variant="outlined"
                      />
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Phone Number*"
                        variant="outlined"
                      />
                    </Box>
                    <Box className="feildgroups">
                      {" "}
                      <TextField
                        className="feild"
                        id="outlined-select-currency"
                        select
                        label="Nationality"
                        defaultValue=""
                      >
                        {nationality.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="feild" label="Date of Birth" />
                      </LocalizationProvider>
                    </Box>
                    <Box className="feildgroups">
                      {" "}
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Address*"
                        variant="outlined"
                      />
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="City/Zip Code*"
                        variant="outlined"
                      />
                    </Box>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Age*"
                      defaultValue=""
                    >
                      {Age.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Typography>Background</Typography>

                    <TextField
                      id="outlined-basic"
                      label="A quick brief about your Background*"
                      variant="outlined"
                      multiline
                      rows={6}
                    />
                    <Typography>Social Media Accounts(Optional)</Typography>
                    <Box className="feildgroups">
                      {" "}
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Twitter"
                        variant="outlined"
                      />
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Youtube"
                        variant="outlined"
                      />
                    </Box>
                    <Box className="feildgroups">
                      {" "}
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Instagram"
                        variant="outlined"
                      />
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="TikTok"
                        variant="outlined"
                      />
                    </Box>
                    <Box className="feildgroups">
                      {" "}
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Snapchat"
                        variant="outlined"
                      />
                      <TextField
                        className="feild"
                        id="outlined-basic"
                        label="Facebook"
                        variant="outlined"
                      />
                    </Box>
                    <Typography>Resume</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Upload your resume"
                      variant="outlined"
                    />
                    <Typography>Professional picture</Typography>
                    <TextField
                      id="outlined-basic"
                      label="profile picture"
                      variant="outlined"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="I have read the First Launch agreements and I agree on its privacy policy & terms of use. I understand that my application might not be accepted by First Launch Platform according to its criteria or priorities."
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
              </Box>
            </FormSection>
          </MainSection>
        </Container>
      </Box>
    </>
  );
};

export default Coordinator;
