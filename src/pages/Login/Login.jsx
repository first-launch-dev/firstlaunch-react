import React from 'react'
import { Box, Container, TextField, Typography } from "@mui/material";
import CustomButton from '../../components/button';
import styled from "styled-components";

import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Login() {
    const navigate = useNavigate()
    const FormSection = styled("div")(({ theme }) => ({
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10rem",
        marginBottom: "10rem",
        maxWidth: "44.313rem",
        backgroundColor:"background.paper",
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
          borderBlockColor:"transparent",
        }
      }));
      
  return (
    <>
   <section className="main" style={{height: "657px"}}>
   <div className="form-section" style={{    position: "relative",
    top: "23%",
    left: "66%",
    width:"23%",
    backgroundColor:'#212121',
    padding:"2rem",
    borderRadius:"15px"}}>
          <form className="form" >
          <Typography className="formheading" variant='h5' color="white">Login</Typography>
              <FormBox m={5}>
                <TextField
                  id="outlined-basic"
                  textColor="#767676"
                  label="Email*"
                  variant="outlined"
                  InputLabelProps={{style : {color : 'white'} }}
                  style={{marginTop:"2rem"}}
                />
                <TextField
                
                
                InputLabelProps={{style : {color : 'white'} }}
                  id="outlined-basic"
                  label="Password*"
                  variant="outlined"
                />
                <Typography variant='p' color="#FF9800" style={{marginLeft:'4px'}}>Forgotten Password?</Typography>
                <CustomButton
                className="borderColor"
                  textColor="#767676"
                  color="#3C3C3C"
                  text="Login"
                  type="submit"
                ></CustomButton>
              </FormBox>
            </form>
            </div>
            <Container style={{ position:"relative", top:"25%", left:"57.5%"}}>
     <Box>
       <button style={{background:"transparent", border: "none", color:"white"}} onClick={() => navigate("/")}>
       <ArrowBackIcon style={{cursor:"pointer"}}/>
       </button>
       <Typography variant='p' fontSize={16} style={{position:"absolute", color:"white"}}>
             Back to Home
       </Typography>
     </Box>
  </Container>
   </section>
    
    </>
  )
}

export default Login