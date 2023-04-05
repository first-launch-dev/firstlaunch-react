import { Image } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import useStyles from "./style";
import Slider from "react-slick";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VieoGallery from "../../components/video-gallery/index";
import { useState } from "react";
const HomeVideo = ({ aboutUs }) => {
  const classes = useStyles();
  const [video, setVideo] = useState(false);
  const [open, setOpen] = useState(false);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box ref={aboutUs} sx={{ bgcolor: "background.secondary" }} pt={8} pb={8}>
      <Container>
        <Grid container>
          <Grid data-aos="fade-up" lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography
                variant="h5"
                component="h1"
                className={classes.bannerHeading}>
                We are{" "}
                <Typography
                  className={classes.headingUnderline}
                  variant="h5"
                  component="span">
                  First Launch
                </Typography>{" "}
                Lit. Co. for Artistic
              </Typography>
              <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}>
                First Launch Company L.L.C. is an entity that specialized in
                developing art talents, through licensed and accredited
                (Audition Services, Applied and Academic Training, and Executive
                Production Packages) at competitive prices for enabling talent
                to set out on the path of professionalism and stardom.
              </Typography>
              <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}>
                The company provides modern solutions in the artistic and
                cinematic field, relying on designing its services on the
                talents of customers by offering competitive prices in the
                artistic and modelling, the first launch platform is a coming
                revolution in the packages of modern media classification, which
                will be a quantum leap in the privatization of the productive
                field, through the automation of services Based on the needs and
                desires based on the talents of customers while providing easy
                and accessible solutions for the customer in the field of
                artistic talent and entertainment in the Kingdom of Saudi
                Arabia.
              </Typography>
            </Box>
          </Grid>
          <Grid data-aos="fade-down" lg={6} md={6} sm={12} xs={12}>
            <Box ml={{ sm: 0, md: 4, lg: 4 }} mt={{ xs: 3, lg: 0 }}>
              <Slider {...settings}>
                <Box className={classes.img}>
                  <Box className={classes.playbtn}>
                    <Box
                      onClick={() => {
                        setOpen(true);
                        setVideo(
                          "assets/first-launch-video-for-collaborators.mp4"
                        );
                      }}
                      className={classes.btn}>
                      <PlayArrowIcon />
                    </Box>
                  </Box>
                  <img
                    width="100%"
                    src="assets/first-launch-video-for-customers.png"
                  />
                </Box>
                <Box className={classes.img}>
                  <Box
                    onClick={() => {
                      setOpen(true);
                      setVideo("assets/first-launch-video-for-customers.mp4");
                    }}
                    className={classes.playbtn}>
                    <Box className={classes.btn}>
                      <PlayArrowIcon />
                    </Box>
                  </Box>
                  <img
                    width="100%"
                    src="assets/first-launch-video-for-collaborators.png"
                  />
                </Box>
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <VieoGallery open={open} setOpen={setOpen} video={video} />
    </Box>
  );
};

export default HomeVideo;
