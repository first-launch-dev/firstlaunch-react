import React from "react";
import useStyles from "../sections/home-videos/style";
import act from "../assets/images/services/bg/service-acting.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function ActingTalent({ aboutUs }) {
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
                From audition to job offers
              </Typography>
              <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}
              >
                Usually, performance experiences require a lot of time,
                arrangement and appointments, and there are many challenges
                facing talented people in this field, and the dependence of the
                opportunity to display talent on personal relationships,
                knowledge and the possibility of support from producers and
                directors.
                <Typography
                  mt={2}
                  variant="p"
                  component="p"
                  className={classes.para}
                >
                  This service provided will help you overcome challenges
                  through a new way of displaying your talent, and you will be
                  able to raise the level of professionalism in your
                  performance, while providing support from specialists in your
                  field of representation and technical style appropriate to
                  your abilities, and help you highlight your best talents that
                  are not yet discovered,
                </Typography>
                <Typography
                  mt={2}
                  variant="p"
                  component="p"
                  className={classes.para}
                >
                  In addition, you will have a business card to enter it for all
                  production offices and international companies through a short
                  video that shows your performance experience alone or even
                  with participants and representatives on request. Coordination
                  with them is made to appear in the most complete way through
                  which any director or producer can judge your talent with the
                  appreciation it deserves. And respect.
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
                <img width="100%" src={act} />
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
                  Full coordination of technical work and performance experience
                  within five working days
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
                  Receive the initial copy for work within a fixed period of
                  time after filming within 10 days
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
                  Attending the photography site at a fixed date to be
                  determined according to what suits the client
                </p>
              </Box>
            </Grid>
          </Container>
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
            navigate("/services/acting-talent/pricing");
          }}
        >
          Book Now
        </Button>
      </Container>
    </Box>
  );
}

export default ActingTalent;
