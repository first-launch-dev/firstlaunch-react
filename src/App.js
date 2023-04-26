import React from "react";
import { useState, useRef, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./sections/header";
import Footer from "./sections/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home";
import Pay from "./pages/pay";
import Services from "./pages/services";
import WirtingTalent from "./pages/wirting-talent";
import VoiceTalent from "./pages/voice-talent";
import { useLocation } from 'react-router-dom'
import MusicalTalent from "./pages/musical-talent";
import ProfessionalModels from "./pages/professional-models";
import Influencers from "./pages/influencers";
import ActingTalent from "./pages/acting-talent";
import AboutUs from "./pages/AboutUS/AboutUs";
import LaunchWithUs from "./pages/LaunchWithUs/LaunchWithUs";
import Pricing from "./pages/pricing";
import Portfolio from "./pages/Portfolio/Portfolio";
import OurTeam from "./pages/OurTeam/OurTeam";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import RefundPolicy from "./pages/RefundPolicy";
import Login from "./pages/Login/Login";
import Coordinator from "./pages/FooterFormPages/Coordinator";
import PartnerShip from "./pages/FooterFormPages/PartnerShip";
import Booking from "./pages/Booking/Booking";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer, toast } from "react-toastify";
import { setMessage, resetFormErrorsAction } from "redux/actions/commonActions";
import Guest from "middleware/Guest";


function App({common, setMessage, resetErrors, auth}) {
  const [isArabic, setIsArabic] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [fade, setFade] = useState(false);
  const launchWithUs = useRef(null);
  const aboutUs = useRef(null);
  const talentTrack = useRef(null);
  const ourTeam = useRef(null);
  const banner = useRef(null);
  const services = useRef(null);
 
  const location = useLocation();
  useEffect(()=>{
    if(common.message  !== null){
      toast[common.message.type](common.message.message);
      setMessage(null)
    }
  }, [common, setMessage])
  useEffect(() => {
    if (location) resetErrors({});
  }, [location]);

  const HeaderApp =() => {
    let location = useLocation();
    const pathname = location.pathname
    return( pathname === "/login" || pathname === "/signUp" ? <></>:  <Header
    banner={banner}
    setFade={setFade}
    launchWithUs={launchWithUs}
    aboutUs={aboutUs}
    talentTrack={talentTrack}
    ourTeam={ourTeam}
    services={services}
    scrollToSection={scrollToSection}
    setIsArabic={setIsArabic}
    
  />)
  }
  const FooterApp = () => {

    let location = useLocation();
    const pathname = location.pathname
    return(pathname === '/login' || pathname === '/signUp' ? <></> : <Footer setIsDark={setIsDark} /> )
  }


  const light = {
    palette: {
      mode: "light",
      background: {
        paper: "#F5F5F5",
        secondary: "#FAFAFA",
        overlay: "#fafafa",
      },
      text: {
        primary: "#201F1E",
        secondary: "#fb8c00",
        paraprimary: "#6c757d",
        black: "#000",
      },
      border: {
        primary: "rgba(0, 0, 0, 0.12)",
      },
    },
    typography: {
      fontFamily: "Tajawal",
    },
  };

  const dark = {
    palette: {
      mode: "dark",
      background: {
        paper: "#212121",
        secondary: "#303030",
        overlay: "#303030",
      },
      text: {
        primary: "#fff",
        secondary: "#fb8c00",
        paraprimary: "#fff",
        black: "#fff",
        dprimary: "#6c757d",
      },
      border: {
        primary: "#6c757d",
      },
    },
    typography: {
      fontFamily: "Tajawal",
    },
  };

  const scrollToSection = (event, ref) => {
    event.preventDefault();
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };



  return (
    <>
      <ThemeProvider theme={createTheme(isDark ? dark : light)}>
       
  
     
       <HeaderApp />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  scrollToSection={scrollToSection}
                  banner={banner}
                  setFade={setFade}
                  fade={fade}
                  launchWithUs={launchWithUs}
                  aboutUs={aboutUs}
                  talentTrack={talentTrack}
                  ourTeam={ourTeam}
                  isArabic={isArabic}
                  services={services}
                />
              }
            />
            <Route path="/pay" element={<Pay />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<AboutUs/>} />
            <Route path="/launchwithus" element={<LaunchWithUs/>} />
            <Route path="/services/voice-talent" element={<VoiceTalent />} />
            <Route path="/services/writing-talent" element={<WirtingTalent />} />
            <Route path="/services/musical-talent" element={<MusicalTalent />} />
            <Route path="/services/professional-models" element={<ProfessionalModels />} />
            <Route path="/services/influencers" element={<Influencers />} />
            <Route path="/services/acting-talent" element={<ActingTalent />} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/ourteam" element={<OurTeam/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/signUp" element={<Guest isLoggedIn={auth.isLoggedIn}><SignUp/></Guest>} />
            <Route path="/login" element={<Guest isLoggedIn={auth.isLoggedIn}><Login/></Guest>} />
            <Route path="/terms-of-use" element={<TermsOfUse/>} />
            <Route path="/refund-policy" element={<RefundPolicy/>} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/coordinators" element={<Coordinator heading="Coordinators Application"/>} />
            <Route path="/collaborators" element={<Coordinator heading="Collaborators Application"/>} />
            <Route path="/partnership" element={<PartnerShip/>} />
            <Route path="/Individual-partnership" element={<Coordinator heading="Partnership Application"/>} />
            <Route path="/Organization-partnership" element={<Coordinator heading="Partnership Application"/>} />
          </Routes>
          <FooterApp/>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  common: state.common,
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({
  setMessage: (data) => dispatch(setMessage(data)),
  resetErrors: (data) => dispatch(resetFormErrorsAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);