import { Image } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material"
import useStyles from '../sections/home-services/style'
import inf from '../assets/images/services/service-influencers.png'
import Slider from "react-slick";
import ServiceCard from "../components/cards/service";
import { Link, useNavigate } from "react-router-dom";

const Services = ({talentTrack}) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const goToPage = (routeProp) => {
        switch (routeProp) {
            case '/services/writing-talent':
              navigate('/services/writing-talent');
              break;
            case '/services/voice-talent':
              navigate('/services/voice-talent');
              break;
            case '/services/acting-talent':
                navigate('/services/acting-talent');
              break;
            case '/services/musical-talent':
                navigate('/services/musical-talent');
              break;
            case '/services/professional-models':
                navigate('/services/professional-models');
              break;
            case '/services/influencers':
                navigate('/services/influencers');  
              break;
            default:
              console.log(`Invalid route: ${routeProp}`);
          }
    }
    const services = [
        {
            // title: 'For your',
            titleColor: "Writing talent",
            text: " From expressive writing to works of art ",
            img: "assets/service-writing.png",
            dataOS: 'fade-right',
            route: '/services/writing-talent'
        },
        {
            // title: 'For your',
            titleColor: "Voice talent",
            text: " A distinctive sound that reaches everyone ",
            img: "assets/service-singing.webp",
            dataOS: 'fade-down',
            route: '/services/voice-talent'

        },
        {
            // title: 'For your',
            titleColor: "Acting talent",
            text: " From audition to job offers ",
            img: "assets/service-acting.png",
            dataOS: 'fade-left',
            route: '/services/acting-talent'

        },
        {
            // title: 'For your',
            titleColor: "Musical talent",
            text: "Music that touches the senses",
            img: "assets/service-music.png",
            dataOS: 'fade-right',
            route: '/services/musical-talent'
        },
        {
            // title: 'For your',
            titleColor: "Professional Models",
            text: "More professional appearence",
            img: "assets/service-modeling.webp",
            dataOS: 'fade-left',
            route: '/services/professional-models'
        },
        {
            // title: 'For your',
            titleColor: "Influencers' services",
            text: " A distinctive sound that reaches everyone",
            img: inf,
            dataOS: 'fade-left',
            route: '/services/influencers'
        }
    ]

    return (
        <Box ref={talentTrack} sx={{ bgcolor: 'background.secondary' }} pt={12} pb={8}>
            <Container sx={{ position: 'relative' }}>
                <Box textAlign="center">
                    <Typography className={classes.serviceHeading} variant="h4" component="h4" mb={7}>Services</Typography>
                </Box>
                <Grid container justifyContent="center">
                    {
                        services.map((item, index) =>
                            <Grid  key={index} lg={4} md={4} sm={6} xs={12} mt={4}>
                                <ServiceCard onClick={() => {goToPage(item?.route);}} dataOS={item.dataOS} title={item.title} titleColor={item.titleColor} text={item?.text} img={item.img} />
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Services;