import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  Container,
  TextField,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import CustomButton from "../../components/button";
// import styled from "styled-components";
import { loginAction } from "redux/actions/authAction";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginImg from "../../assets/images/login-page-img.jpeg";
import styled from "@emotion/styled";
import { CenterFocusStrong } from "@mui/icons-material";
const FormSection = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10rem",
  marginBottom: "10rem",
  maxWidth: "44.313rem",
  position: "relative",
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
      "& .bolder": {
        borderBottom: "1px solid #fb8c00",
      },
    },
  },
}));
const LoginContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const FormUpperSection = styled("div")(({ theme }) => ({
  backgroundColor: "rgb(33, 33, 33)",
  padding: "2rem",
  borderRadius: "15px",
  margin: " 60px 0 30px 0",
}));
const FormBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.25rem",
  backgroundColor: "background.paper",
  "& .borderColor": {
    borderBlockColor: "transparent",
  },
}));
const Section = styled("div")(({ theme }) => ({
  backgroundImage: `url(${LoginImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  height: "100vh",

  [theme.breakpoints.down("sm")]: {
    maxWidth: 540,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 720,
  },
}));
const LoginButton = styled("button")(({ theme }) => ({
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  display: "inline-flex",
}));
const BackLink = styled("div")(({ theme }) => ({
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  display: "inline-flex",
}));

function Login(props) {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", formFields.email);
    formData.append("password", formFields.password);
    props.login(formData, navigate);
  };
  return (
    <>
      <Section>
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sm={12}
            paddingLeft="80px"
            paddingRight="80px"
            marginTop="6%"
          >
            <FormUpperSection>
              <form className="form" onSubmit={handleSubmit}>
                <Typography className="formheading" variant="h5" color="white">
                  Login
                </Typography>
                <FormBox m={5}>
                  <TextField
                    type="email"
                    onChange={handleChange}
                    value={formFields?.email}
                    name="email"
                    InputLabelProps={{ style: { color: "white" } }}
                    style={{ marginTop: "2rem" }}
                    textColor="#767676"
                    label="Email *"
                    variant="outlined"
                  />
                  {props.common.errors.email && (
                    <p className="form-error">
                      {props.common.errors.email[0] ||
                        props.common.errors.email}
                    </p>
                  )}
                  <TextField
                    onChange={handleChange}
                    name="password"
                    value={formFields?.password}
                    type="password"
                    InputLabelProps={{ style: { color: "white" } }}
                    label="Password *"
                    variant="outlined"
                  />
                  {props.common.errors.password && (
                    <p className="form-error">
                      {props.common.errors.password[0] ||
                        props.common.errors.password}
                    </p>
                  )}
                  <Typography
                    variant="p"
                    color="#FF9800"
                    style={{ marginLeft: "4px" }}
                  >
                    Forgotten Password?
                  </Typography>
                  <CustomButton
                    disabled={props.common.form_loder === 1}
                    isLoading={props.common.form_loder === 1}
                    className="borderColor"
                    style={{ borderBlockColor: "transparent" }}
                    textColor="#767676"
                    color="#3C3C3C"
                    text="Login"
                    type="submit"
                  ></CustomButton>
                </FormBox>
              </form>
            </FormUpperSection>
            <Link to="/">
              <BackLink>
                <ArrowBackIcon />
                <Typography fontSize={17} color={"white"}>
                  Back to Home
                </Typography>
              </BackLink>
            </Link>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}

const mapStatesToProps = (state) => ({
  auth: state.auth,
  common: state.common,
});
const mapDispatchToProps = (dispatch) => ({
  login: (data, navigate) => dispatch(loginAction(data, navigate)),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
