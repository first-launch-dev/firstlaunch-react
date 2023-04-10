import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/button";
import useStyles from "./style";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
const Footer = ({ setIsDark }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{ bgcolor: "background.paper" }}
        component="footer"
        pt={15}
        pb={5}>
        <Container>
          <Grid container>
            <Grid lg={4} md={4} sm={12} xs={12}>
              <Box px={4} mt={3}>
                {/* <h5 >logo</h5> */}
                <img
                  style={{ margin: 0, marginBottom: 10, maxWidth: "150px" }}
                  src={
                    theme.palette.mode == "dark"
                      ? "assets/logow.png"
                      : "assets/logo.png"
                  }
                  alt=""
                />
                <Typography className={classes.para} variant="p" component="p">
                  First Launch Company L.L.C. is an entity that specialized in
                  developing art talents, through licensed and approved;
                  (audition services, applied training, and executive production
                  packages) at competitive prices for enabling talent to set out
                  on the path of professionalism and stardom
                </Typography>

                <Typography
                  className={classes.join}
                  mt={6}
                  variant="p"
                  component="p">
                  JOIN US
                </Typography>
                <Typography variant="p" mt={2} component="p">
                  <a className={classes.joinLinks} href="coordinators">
                    Coordinators |{" "}
                  </a>
                  <a className={classes.joinLinks} href="collaborators">
                    Collaborators |{" "}
                  </a>
                  <a className={classes.joinLinks} href="partnership">
                    Partnerships
                  </a>
                </Typography>
                <CustomButton
                  onClick={() => {
                    setIsDark((prev) => !prev);
                  }}
                  Icon={
                    theme.palette.mode == "dark" ? WbSunnyIcon : DarkModeIcon
                  }
                  text={
                    theme.palette.mode == "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  customSx={{ color: "text.primary", marginTop: 3 }}
                />
              </Box>
            </Grid>
            <Grid lg={4} md={4} sm={12} xs={12}>
              <Box px={5} mt={3} className={classes.border}>
                <Typography className={classes.join} variant="p" component="p">
                  LEGAL
                </Typography>
                <Typography variant="p" mt={2} component="p">
                  <a
                    className={classes.joinLinks}
                    href="privacy-policy">
                    Privacy Policy &nbsp; | &nbsp;{" "}
                  </a>
                  <a
                    className={classes.joinLinks}
                    href="terms-of-use">
                    Terms of Use &nbsp; | &nbsp;{" "}
                  </a>
                  <a
                    className={classes.joinLinks}
                    href="refund-policy">
                    Refund Policy
                  </a>
                </Typography>
                <Divider sx={{ marginTop: 3 }} />

                <Box
                  className={classes.register}
                  mt={3}
                  justifyContent="space-between">
                  <a href="https://maroof.sa/businesses/details/176554">
                    <img width="80" src="assets/maroof.png" alt="" />
                  </a>
                  <Typography
                    className={classes.joinLinks}
                    variant="p"
                    component="span">
                    Registry No. 4030381541
                  </Typography>
                  <a href="https://maroof.sa/businesses/details/176554">
                    <img
                      width="80"
                      src="assets/ssl-secure-connection.png"
                      alt=""
                    />
                  </a>
                </Box>
                <Divider sx={{ marginTop: 3 }} />
                <Box
                  className={classes.register}
                  justifyContent="space-between"
                  mt={3}>
                  <img width="50" src="assets/mada.svg" alt="" />
                  <img width="50" src="assets/express.svg" alt="" />
                  <img width="50" src="assets/cirrus.svg" alt="" />
                </Box>
                <Box
                  className={classes.register}
                  justifyContent="space-between"
                  mt={3}>
                  <img width="50" src="assets/measter.svg" alt="" />
                  <img width="50" src="assets/visa.svg" alt="" />
                  <img width="50" src="assets/plus.svg" alt="" />
                </Box>
                <Box
                  className={classes.register}
                  justifyContent="space-between"
                  mt={3}>
                  <img width="50" src="assets/pay.svg" alt="" />
                  <img width="50" src="assets/master.svg" alt="" />
                  <img width="50" src="assets/paypal.svg" alt="" />
                </Box>
              </Box>
            </Grid>
            <Grid lg={4} md={4} sm={12} xs={12}>
              <Box px={3} mt={3}>
                <Typography className={classes.join} variant="p" component="p">
                  QUICK CONTACT
                </Typography>
                <Typography
                  className={classes.para}
                  variant="p"
                  component="p"
                  mt={2}>
                  Address: 8157 Prince Sultan Road <br />
                  Al-Muhammadiyah District <br />
                  Jeddah 23623, Saudi Arabia
                </Typography>
                <Typography
                  className={classes.para}
                  variant="p"
                  component="p"
                  mt={2}>
                  Phone: 920012472
                </Typography>
                <Typography
                  className={classes.para}
                  variant="p"
                  component="p"
                  mt={2}>
                  WhatsApp: +966 569 65 2777
                </Typography>
                <Typography
                  className={classes.para}
                  variant="p"
                  component="p"
                  mt={2}>
                  Email: info@firstlaunch.com.sa
                </Typography>

                <CustomButton
                  customSx={{ borderColor: "#0b9940", marginTop: 3 }}
                  onClick={() => window.open("https://wa.me/+966569652777")}
                  Icon={WhatsAppIcon}
                  text="WhatsApp"
                  textColor="#0b9940"
                />
                <Typography
                  className={classes.join}
                  variant="p"
                  component="p"
                  mt={5}>
                  FOLLOW US
                </Typography>
                <Box className={classes.register} gap={2} mt={2}>
                  {/* <a href=""><FacebookIcon /></a>yy */}
                  <a href="https://twitter.com/first_launch">
                    <TwitterIcon className={classes.socialLink} />
                  </a>
                  <a href="https://www.instagram.com/first.launch/">
                    <InstagramIcon className={classes.socialLink} />
                  </a>
                  <a href="https://www.youtube.com/@firstlaunchlit.co.forartis6847/videos">
                    <YouTubeIcon className={classes.socialLink} />
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box textAlign="center" sx={{ bgcolor: "background.secondary" }} py={2}>
        <Typography
          className={classes.paraLast}
          variant="p"
          component="p"
          mt={2}>
          Copyright © 2023 First Launch.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
