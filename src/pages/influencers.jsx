import React from 'react';
import useStyles from '../sections/home-videos/style';
import inf from '../assets/images/services/bg/service-influencers.png'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Influencers({aboutUs}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box ref={aboutUs} sx={{ bgcolor: "background.secondary" }} pt={8} pb={8}>
      <Container>
        <Grid container>
          <Grid data-aos="fade-up" lg={6} md={6} sm={12} xs={12} style={{marginTop:'8em'}}>
          <Box>
              <Typography
                variant="h5"
                component="h1"
                style={{textDecoration:"underline", textDecorationColor:'#FB8C00', textDecorationThickness:'0.09rem', textUnderlineOffset:"0.5em", marginBottom:'1em'}}>
                A distinctive sound that reaches everyone
              </Typography>
              <Typography
                mt={2}
                variant="p"
                component="p"
                  className={classes.para}>
                      It's easy to get to the top, but tough to keep going.
                <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}>
                   You may need a work team that provides you with statistical and marketing advice based on interactive 
                   performance indicators through which you can appear professionally and contribute to increasing your impact.
                   And that by helping you to work on the latest studies and effective modern ideas that are appropriate in 
                   customizing your digital media orientation in easier and more effective ways through knowing the needs 
                   based on the analysis of the content that you previously provided.
                </Typography>
                <Typography
                mt={2}
                variant="p"
                component="p"
                className={classes.para}>
                      And areas of development and interest based on the scientific opinion specialized in your social 
                      field to make the direct impact and the strongest appearance.
                    </Typography>
              </Typography>
              <Box>
                <Button
               style={{backgroundColor:'#FF9800',color:"black", marginTop:'2em'}}
                >
                    Download Service Portfolio
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid data-aos="fade-down" lg={6} md={6} sm={12} xs={12}>
            <Box ml={{ sm: 0, md: 4, lg: 4 }} mt={{ xs: 3, lg: 0 }}>
                <Box className={classes.img}>
                  <img
                    width="100%"
                    src={inf}
                  />
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Influencers;