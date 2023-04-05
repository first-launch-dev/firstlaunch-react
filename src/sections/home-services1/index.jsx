import { Image } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import useStyles from "./style";
import Slider from "react-slick";
import ServiceCard from "../../components/cards/service";
import { Link, useNavigate } from "react-router-dom";
// import ServiceCard1 from "../../components/cards/service";
import ServiceCard1 from "../../components/cards/service1";

const HomeServices1 = ({ launchWithUs, isArabic }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const services = [
    {
      // title: 'For your',
      titleColor: isArabic ? "باقات الانتاج" : "Packages",
      text: "Starting from",
      img: "assets/s1.JPG",
      price: "4,480 SR",
      dataOS: "fade-right",
      link: "https://firstlaunch.pro/product-category/packages/",
    },
    {
      // title: 'For your',
      titleColor: isArabic ? "برامج التدريب" : "Training",
      text: "Starting from",
      img: "assets/s2.jpg",
      price: "299 SR",
      dataOS: "fade-down",
      link: "https://firstlaunch.pro/product-category/academic-training-programs-music-basics/",
    },
    {
      // title: 'For your',
      titleColor: isArabic ? "تجربة أداء" : "Audition",
      text: "Starting from",
      img: "assets/s3.jpg",
      price: "490 SR",
      dataOS: "fade-left",
      link: "https://firstlaunch.pro/product-category/audition/",
    },
  ];

  return (
    <Box
      ref={launchWithUs}
      sx={{ bgcolor: "background.secondary" }}
      pt={8}
      pb={8}>
      <Container sx={{ position: "relative" }}>
        <Box textAlign="center">
          <Typography
            className={classes.serviceHeading}
            variant="h4"
            component="h4"
            mb={4}>
            Services
          </Typography>
        </Box>
        <Grid container>
          {services.map((item, index) => (
            <Grid
              onClick={() => {
                window.open(item.link, "_blank");
              }}
              key={index}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              mt={4}>
              <ServiceCard1
                dataOS={item.dataOS}
                height="250"
                width="250"
                price={item.price}
                title={item.title}
                titleColor={item.titleColor}
                text={item.text}
                img={item.img}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeServices1;
