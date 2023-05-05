import { Box, Container, Divider, Grid, Typography, TextField } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from "styled-components";
import CustomButton from "../../components/button";
import { useEffect } from "react";
import AppoinmentService from "services/appoinment.service";
import { useState } from "react";
import { displayMessageAction } from "redux/actions/commonActions";
import { connect } from "react-redux";

const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItem: "center",
  gap:"1rem",
  borderRadius: '10px',
  border: 'solid 2px #111',
  overflow: 'hidden',
  "& .section": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    width: '50%',
    "&.leftSide":{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        textAlign: 'center',
        "& img": {
            margin: '0 auto',
            height: "100px",
            width: "100px",
            objectFit: "cover",
            borderRadius: '100%'
        },
        "& .Mui-selected": {
          backgroundColor: '#ff9800'
        }
    },
    "&.rightSide":{
        display: "block",
      "& .slot": {
        display: "inline-block",
        maxWidth: 'max-content'
      },
    },
    "& .heading": {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    "& .paragraph":{
      fontSize: "0.875rem",
      fontWeight: "400",
    },
    "& .subheading":{
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    "& .mediabox":{
      display:"flex",
    alignItem:"center",
    gap:"1rem",
      "& .socialLink":{
        width: "1.5rem",
      }
    },
  },
  "& .pictureSection":{
    maxWidth:"40.5rem",
  }
}));
const FormBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.25rem",
  backgroundColor:"background.paper",
  "& .borderColor":{
    borderColor:"transparent",
  }
}));
const Booking = ({displayMessage}) => {
  const [data, setData] = useState([]);
  const [step, setStep] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(()=>{
    async function fetchBookingData  (){
      setIsFetching(true);     
      await AppoinmentService.fetchService().then((response)=>{
        setData(response.data.data)
      })
      setIsFetching(false);
    }
    fetchBookingData();
  },[])

    return (
        <Box sx={{ bgcolor: "background.secondary" }} pt={20} pb={16}>
            <Container maxWidth="md" >
                <MainSection>
                    <Box className="section leftSide" pl={5} pr={5} pt={5} pb={5}  sx={{ bgcolor: "background.paper" }}>    
                        <img src="assets/s2.jpg" />
                        <Typography variant="h3" component="h1" mb={0}>
                            Book Now
                        </Typography>
                        <Typography variant="p" component="p">
                        This is how your first booking page might look like.
                        Almost everything here can be customized to your scheduling needs.
                        </Typography>
                        <Typography variant="h6" component="h5" mt={5}>
                            Choose Date
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                    </Box>
                    <Box  className="section rightSide" sx={{ bgcolor: "background.secondary" }}  px={5} container  py={10}>                        
                        {step === 1 ? <>
                        {/* <Typography variant="h6" component="h5">
                            Choose Time Slots
                        </Typography>
                        <Box px={2} className="slot" mt={1} mr={2} py={1} sx={{ bgcolor: "background.paper" }}>15 mins</Box>
                        <Box px={2} className="slot" mt={1} py={1} sx={{ bgcolor: "background.paper" }}>20 mins</Box> */}
                        <Typography variant="h6" component="h5" mt={5}>
                            What time works best
                        </Typography>
                        <Box px={2} mt={1} py={1} sx={{ bgcolor: "background.paper" }}>
                        <Typography component="p">
                          <small style={{fontSize: '12px'}}>
                          Only 2 slots available
                          </small>
                        </Typography>
                        <Typography variant="p" component="p">
                          9.00am
                        </Typography>
                        </Box>

                        <CustomButton
                          text="Continue"
                          color="#db8c00"
                          textColor="#222"
                          onClick={()=>{setStep(2)}}
                          customSx={{width: '100%', marginTop: '30px', display: 'block'}}
                        />
                        </> : 
              <FormBox>
                <TextField
                  id="outlined-basic"
                  label="Email*"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Name*"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={6}
                />
                <CustomButton
                className="borderColor"
                  textColor="#767676"
                  color="rgb(255, 152, 0)"
                  text="Submit"
                  type="button"
                  onClick={()=>{displayMessage('Booking Confirmed')}}
                ></CustomButton>
              </FormBox>
                        }
                    </Box>
                </MainSection>
            </Container>
        </Box>
    );
}


const mapStatesToProps = (state) => ({
  auth: state.auth,
  common: state.common,
});
const mapDispatchToProps = (dispatch) => ({
  displayMessage: (data) => dispatch(displayMessageAction(data)),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Booking);
