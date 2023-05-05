import React from "react";
import useStyles from "../sections/home-videos/style";
import music from "../assets/images/services/bg/service-music.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";
function MusicalTalent({ aboutUs }) {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box ref={aboutUs} sx={{ bgcolor: "background.secondary" }} pt={8} pb={8}>
      <Container>
        <Grid container>
          <Grid
            data-aos="fade-up"
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ marginTop: "8em" }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h1"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#FB8C00",
                  textDecorationThickness: "0.09rem",
                  textUnderlineOffset: "0.5em",
                  marginBottom: "1em",
                }}
              >
                Music that touches the senses
              </Typography>
              <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}
              >
                Through the service provided, we provide all the capabilities of
                professional audio recording to highlight your talent for
                playing the musical instrument you prefer, with the possibility
                of recording an artistic and expressive video in which the
                appropriate place is prepared for the atmosphere of the musical
                piece being played, in addition to providing experts and
                specialists in the musical instrument in which you excel to
                supervise Not to deviate from the musical notes or even direct
                you to the best technique to show your playing in the most
                beautiful feeling that you can communicate to those around you,
                which helps you extract the best of your musical capabilities
                for the audience, to create a highly professional musical audio
                experience for the senses.
                <Typography
                  mt={2}
                  variant="p"
                  component="p"
                  className={classes.para}
                >
                  So that you can use this to introduce your talent to be an
                  entry gateway to the professional work through which
                  producers, orchestras, and those looking to invest in your
                  talent can get to know you distinctively.
                </Typography>
              </Typography>
              <Box>
                <Button
                  style={{
                    backgroundColor: "#FF9800",
                    color: "black",
                    marginTop: "2em",
                  }}
                >
                  Download Service Portfolio
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid data-aos="fade-down" lg={6} md={6} sm={12} xs={12}>
            <Box ml={{ sm: 0, md: 4, lg: 4 }} mt={{ xs: 3, lg: 0 }}>
              <Box className={classes.img}>
                <img width="100%" src={music} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Button
          style={{
            backgroundColor: "rgb(255, 152, 0)",
            color: "black",
            marginTop: "2em",
            marginInline: "auto",
            display: "block",
            minWidth: "190px",
          }}
          onClick={() => {
            navigate("/pricing");
          }}
        >
          Book Now
        </Button>
      </Container>
    </Box>
  );
}

export default MusicalTalent;
