import React from 'react';
import { Box, Container, TextField, Typography } from "@mui/material";
import CustomButton from '../../components/button';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 function SignUp() {
    const FormBox = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        gap: "2.25rem",
        backgroundColor:"background.paper",
        "& .borderColor":{
          borderBlockColor:"transparent",
        }
      }));
      
    
    const navigate = useNavigate()
  return (
    <>
    <section className="main-signUp" style={{height: "657px"}}>
    <div className="form-section" style={{    position: "relative",
     top: "2%",
     left: "65%",
     width:"19%",
     backgroundColor:'#212121',
     padding:"2rem",
     borderRadius:"15px"}}>
           <form className="form" >
           <Typography className="formheading" variant='h5' color="white">Login</Typography>
               <FormBox m={5}>
               <TextField
                   id="outlined-basic"
                   InputLabelProps={{style : {color : 'white'} }}
                   label="Name *"
                   variant="outlined"
                    
                   style={{marginTop:"2rem",color:"white"}}
                 />
                 <TextField
                   id="outlined-basic"
                   
                   InputLabelProps={{style : {color : 'white'} }}
                   textColor="#767676"
                   label="Email *"
                   variant="outlined"
                 />
                 <TextField
                   id="outlined-basic"
                   
                   InputLabelProps={{style : {color : 'white'} }}
                   label="Password *"
                   variant="outlined"
                 />
                   <TextField
                
                InputLabelProps={{style : {color : 'white'} }}
                   id="outlined-basic"
                   label="Confirm Password *"
                   variant="outlined"
                 />
                 <Typography variant='p' color="#ffff" fontSize={14} style={{marginLeft:'4px',marginTop: "-16px",marginBottom: "-16px"}}>Have an account already?
                 <button
                 className="borderColor-login"
                   onClick={() => navigate('/login')}
                 >Login</button>
                 </Typography>
                 <CustomButton
                 className="borderColor"
                   textColor="#767676"
                   color="#3C3C3C"
                   text="Sign Up"
                   type="submit"
                   
                 ></CustomButton>
                
               </FormBox>
             </form>
             
             </div>
             <Container style={{ position:"relative", top:"3%", left:"56.5%"}}>
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

export default SignUp;
