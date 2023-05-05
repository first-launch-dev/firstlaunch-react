import React from "react";
import useStyles from "../sections/home-videos/style";
import model from "../assets/images/services/bg/service-modeling.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";

function ProfessionalModels({ aboutUs }) {
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
                More professional appearance
              </Typography>
              <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}
              >
                We understand that what hinders your distinguished and
                professional appearance is the continuity of that, because
                whenever it appears constantly, the more advertising, marketing
                and production agencies compete with you to cooperate with your
                talent.
                <Typography
                  mt={2}
                  variant="p"
                  component="p"
                  className={classes.para}
                >
                  We have the reach and visibility you deserve; And that is
                  through a specialized team that offers you high value at the
                  right price; Where we arrange professional photography
                  sessions with an artistic vision of holistic dimensions, more
                  than just dealing with professional photographers, to appear
                  in the most beautiful and strongest style that you can focus
                  on.
                </Typography>
                <Typography
                  mt={2}
                  variant="p"
                  component="p"
                  className={classes.para}
                >
                  And providing a short professional video service for the first
                  time in the Arab world so that you appear in different filming
                  sessions and public places with cinematic cameras that
                  photograph you on the red carpet that you deserve to stand on,
                  as this video helps you to show the most beautiful angles that
                  highlight your beauty and your talent for show It matches your
                  distinctive taste, which guarantees your continuous climb up
                  the ladder of success and fame.
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
                <img width="100%" src={model} />
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
            navigate("/services/professional-models/pricing");
          }}
        >
          Book Now
        </Button>
      </Container>
    </Box>
  );
}

export default ProfessionalModels;
