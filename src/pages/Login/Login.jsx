import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Box, Container, TextField, Typography } from "@mui/material";
import CustomButton from '../../components/button';
import styled from "styled-components";
import { loginAction } from 'redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

function Login(props) {
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState({
      email: '',
      password: '',
    })

    const handleChange = (e) => {
      setFormFields((prevState) => ({
        ...prevState,        
        [e.target.name]: e.target.value
      }))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      let formData = new FormData();
      formData.append('email', formFields.email);
      formData.append('password', formFields.password);
      props.login(formData, navigate('/dashboard'))
    }
  return (
    <>
   <section className="main" style={{height: "100vh"}}>
   <div className="form-section" style={{    position: "relative",
    top: "23%",
    left: "66%",
    width:"23%",
    backgroundColor:'#212121',
    padding:"2rem",
    borderRadius:"15px"}}>
          <form className="form" onSubmit={handleSubmit}>
          <Typography className="formheading" variant='h5' color="white">Login</Typography>
              <FormBox m={5}>
                <TextField
                   type='email'
                   onChange={handleChange}
                   value={formFields?.email}
                   name='email'
                   InputLabelProps={{style : {color : 'white'} }}
                   style={{marginTop:"2rem"}}
                   textColor="#767676"
                   label="Email *"
                   variant="outlined"
                />
                 {props.common.errors.email && <p className='form-error'>{props.common.errors.email[0] || props.common.errors.email}</p>}
                <TextField
                   onChange={handleChange}
                   name='password'
                   value={formFields?.password}
                   type='password'
                   InputLabelProps={{style : {color : 'white'} }}
                   label="Password *"
                   variant="outlined"
                />{props.common.errors.password && <p className='form-error'>{props.common.errors.password[0] || props.common.errors.password}</p>}
                <Typography variant='p' color="#FF9800" style={{marginLeft:'4px'}}>Forgotten Password?</Typography>
                <CustomButton
                  disabled={props.common.form_loder === 1}
                  isLoading={props.common.form_loder === 1}
                  className="borderColor" style={{borderBlockColor: "transparent"}}
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


const mapStatesToProps = (state) => ({
  auth: state.auth,
  common: state.common
})
const mapDispatchToProps = (dispatch) => ({
  login: data => dispatch(loginAction(data))
})


export default connect(mapStatesToProps, mapDispatchToProps)(Login);
