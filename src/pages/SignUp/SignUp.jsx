import React, { useState } from 'react';
import { Box, Container, TextField, Typography } from "@mui/material";
import CustomButton from '../../components/button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { connect } from 'react-redux';
import {registerAction} from 'redux/actions/authAction';

 function SignUp(props) {   
    const [formFields, setFormFields] = useState({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
      setFormFields((prevState) => ({
        ...prevState,        
        [e.target.name]: e.target.value
      }))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      let formData = new FormData();
      formData.append('name', formFields.name);
      formData.append('email', formFields.email);
      formData.append('password', formFields.password);
      formData.append('password_confirmation', formFields.password_confirmation);
      props.register(formData).then(()=>{
        navigate('/dashboard')
      })      
    }
  return (
    <>
    <section className="main-signUp" style={{height: "657px"}}>
    <div className="form-section" style={{position: "relative",
     top: "2%",
     left: "65%",
     width:"19%",
     backgroundColor:'#212121',
     padding:"2rem",
     borderRadius:"15px"}}>
           <form className="form" onSubmit={handleSubmit}>
           <Typography className="formheading" variant='h5' color="white">Sign Up</Typography>
               <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2.25rem",
                  backgroundColor: "background.paper",
                }}>
               <TextField
                   
                   type='text'
                   InputLabelProps={{style : {color : 'white'} }}
                   label="Name *"
                   variant="outlined"
                   onChange={handleChange}
                   value={formFields?.name}
                   name='name'
                   style={{marginTop:"2rem",color:"white"}}
                 />
                 {props.common.errors.name && <p className='form-error'>{props.common.errors.name[0] || props.common.errors.name}</p>}
                 
                 <TextField
                   
                   type='email'
                   onChange={handleChange}
                   value={formFields?.email}
                   name='email'
                   InputLabelProps={{style : {color : 'white'} }}
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
                 />
                 {props.common.errors.password && <p className='form-error'>{props.common.errors.password[0] || props.common.errors.password}</p>}
                   <TextField
                   InputLabelProps={{style : {color : 'white'} }}
                   label="Confirm Password *"
                   value={formFields?.password_confirmation}
                   variant="outlined"
                   type='password'
                   name='password_confirmation'
                   onChange={handleChange}
                 />
                 {props.common.errors.password_confirmation && <p className='form-error'>{props.common.errors.password_confirmation[0] || props.common.errors.password_confirmation}</p>}
                 <Typography variant='p' color="#ffff" fontSize={14} style={{marginLeft:'4px',marginTop: "-16px",marginBottom: "-16px"}}>Have an account already?
                 <button
                 className="borderColor-login"
                 >Login</button>
                 </Typography>
                 <CustomButton
                  disabled={props.common.form_loder === 1}
                  isLoading={props.common.form_loder === 1}
                 className="borderColor" style={{borderBlockColor: "transparent"}}
                   textColor="#767676"
                   color="#3C3C3C"
                   text="Sign Up"
                   type="submit"
                   
                 ></CustomButton>
                
               </div>
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


const mapStatesToProps = (state) => ({
  auth: state.auth,
  common: state.common
})
const mapDispatchToProps = (dispatch) => ({
  register: data => dispatch(registerAction(data))
})


export default connect(mapStatesToProps, mapDispatchToProps)(SignUp);
