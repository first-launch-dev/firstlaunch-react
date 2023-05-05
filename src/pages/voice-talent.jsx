import React from "react";
import useStyles from "../sections/home-videos/style";
import sing from "../assets/images/services/bg/service-singing.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router";

function VoiceTalent({ aboutUs }) {
  const classes = useStyles();
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
                From expressive writing to works of art
              </Typography>
              <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}
              >
                We understand that the talent for a beautiful voice is rare, and
                your belief in your voice may stop at many challenges to enter
                the artistic community, and reach a distinguished audience. We
                understand well the needs of your voice to reach a distinctive
                artwork that may require a lot of time, effort and money. We
                have a shortcut to many steps that make your voice heard by
                everyone with ease and professionalism.
                <Typography
                  mt={2}
                  variant="p"
                  component="p"
                  className={classes.para}
                >
                  Prepare your voice and choose what suits you from our packages
                  that highlight the capabilities of your voice and the level
                  that matches your capabilities and start the journey of
                  stardom in a professional way.
                </Typography>
                <Typography
                  mt={2}
                  variant="p"
                  component="p"
                  className={classes.para}
                >
                  We have provided you with a specialized team that invests your
                  voice in distinctive singing works by paying attention to the
                  appropriate melody of your voice capabilities and the
                  appropriate musical distribution of the artistic color with
                  attention to the comprehensive technical vision of the work
                  that guarantees you to show your best, and where you will have
                  a business card to enter into all audio and video production
                  companies and artistic studios Through a video accompanying
                  the produced song, either with distinctive graphics or even
                  with a miniature video clip that is characterized by a simple
                  and high-quality modern touch with filming models and actors
                  on demand, coordination with them is made to appear in the
                  most complete way through which any composer or producer can
                  judge your talent with the appreciation and respect you
                  deserve.
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
                <img width="100%" src={sing} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid>
          <Typography
            variant="h5"
            component="h1"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#FB8C00",
              textDecorationThickness: "0.09rem",
              textUnderlineOffset: "0.5em",
              margin: "5em 0 5em 0",
              textAlign: "center",
            }}
          >
            How can I get started?
          </Typography>
          <Container>
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Box>
                <Box
                  id="box-1"
                  className="processLine"
                  style={{
                    margin: "0 auto",
                    borderRadius: "30% 70% 48% 52%/28% 30% 70% 72%",
                    background: "#9f2d76",
                    height: "6.5em",
                    width: "4.5em",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    1
                  </Typography>
                </Box>
                <p>Choosing the package</p>
              </Box>
              {/* <Box style={{textDecoration:"underline", color:"#303030",    width: "10rem", height: "1px", display: "inline-block",left: "unset", right: "-20%", top: "30%", position: "absolute", Visibility:"hidden",background:"linear-gradient(90deg, rgba(13, 13, 13, 0) 0%, rgb(247, 134, 40) 100%"}}><Box component="span" style={{visibility:"hidden"}}>ahfbahfb</Box></Box> */}
              <Box>
                <Box
                  id="box-2"
                  className="processLine"
                  style={{
                    margin: "0 auto",
                    borderRadius: "30% 70% 48% 52%/28% 30% 70% 72%",
                    background: "#67A7A1",
                    height: "6.5em",
                    width: "4.5em",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    2
                  </Typography>
                </Box>
                <p>Request for service</p>
              </Box>
              <Box
                component="span"
                style={{
                  textDecoration: "underline",
                  color: "#303030",
                  width: "10rem",
                  height: "1px",
                  display: "inline-block",
                  left: "unset",
                  right: "-20%",
                  top: "30%",
                  position: "absolute",
                  Visibility: "hidden",
                  background:
                    "linear-gradient(90deg, rgba(13, 13, 13, 0) 0%, rgb(247, 134, 40) 100%",
                }}
              >
                <Box component="span" style={{ visibility: "hidden" }}>
                  ahfbahfb
                </Box>
              </Box>
              <Box>
                <Box
                  id="box-3"
                  className="processLine"
                  style={{
                    margin: "0 auto",
                    borderRadius: "30% 70% 48% 52%/28% 30% 70% 72%",
                    background: "#40316A",
                    height: "6.5em",
                    width: "4.5em",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    3
                  </Typography>
                </Box>
                <p style={{ width: "260px", textAlign: "center" }}>
                  Complete coordination of lyrical work and artistic vision
                  during 15 working days for a simple lyrical work - 45 days for
                  a song with a full band
                </p>
              </Box>
            </Grid>
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginTop: "14em",
              }}
            >
              <Box>
                <Box
                  id="box-6"
                  className="processLine"
                  style={{
                    margin: "0 auto",
                    borderRadius: "30% 70% 48% 52%/28% 30% 70% 72%",
                    background: "#A3A3A3",
                    height: "6.5em",
                    width: "4.5em",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    6
                  </Typography>
                </Box>
                <p style={{ width: "140px", textAlign: "center" }}>
                  Final review
                </p>
              </Box>
              <Box>
                <Box
                  id="box-5"
                  className="processLine"
                  style={{
                    margin: "0 auto",
                    borderRadius: "30% 70% 48% 52%/28% 30% 70% 72%",
                    background: "#F78628",
                    height: "6.5em",
                    width: "4.5em",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    5
                  </Typography>
                </Box>
                <p style={{ width: "260px", textAlign: "center" }}>
                  Receive the initial copy for work within a fixed date after
                  registration within 20 days
                </p>
              </Box>
              <Box>
                <Box
                  id="box-4"
                  className="processLine"
                  style={{
                    margin: "0 auto",
                    borderRadius: "30% 70% 48% 52%/28% 30% 70% 72%",
                    background: "#F6BF24",
                    height: "6.5em",
                    width: "4.5em",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    4
                  </Typography>
                </Box>
                <p style={{ width: "260px", textAlign: "center" }}>
                  Attendance to the recording studio at a fixed date to be
                  determined according to what suits the customer
                </p>
              </Box>
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
        </Grid>
      </Container>
    </Box>
  );
}

export default VoiceTalent;
