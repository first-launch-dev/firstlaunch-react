import { Image } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material"
import useStyles from './style'
import Slider from "react-slick";
import ServiceCard from "../../components/cards/service";
import { Link, useNavigate } from "react-router-dom";

const HomeServices = ({talentTrack}) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const services = [
        {
            // title: 'For your',
            titleColor: "Writing talent",
            text: " From expressive writing to works of art ",
            img: "assets/service-writing.png",
            dataOS: 'fade-right'
        },
        {
            // title: 'For your',
            titleColor: "Voice talent",
            text: " A distinctive sound that reaches everyone ",
            img: "assets/service-singing.webp",
            dataOS: 'fade-down'

        },
        {
            // title: 'For your',
            titleColor: "Acting talent",
            text: " From audition to job offers ",
            img: "assets/service-acting.png",
            dataOS: 'fade-left'

        },
        {
            // title: 'For your',
            titleColor: "Musical talent",
            text: "Music that touches the senses",
            img: "assets/service-music.png",
            dataOS: 'fade-right'
        },
        {
            // title: 'For your',
            titleColor: "Professional Models",
            text: "More professional appearence",
            img: "assets/service-modeling.webp",
            dataOS: 'fade-left'
        }
    ]

    return (
        <Box ref={talentTrack} sx={{ bgcolor: 'background.secondary' }} pt={8} pb={8}>
            <Container sx={{ position: 'relative' }}>
                <Box textAlign="center">
                    <Typography className={classes.serviceHeading} variant="h4" component="h4" mb={7}>Talent Track</Typography>
                </Box>
                <Grid container justifyContent="center">
                    {
                        services.map((item, index) =>
                            <Grid  key={index} lg={4} md={4} sm={6} xs={12} mt={4}>
                                <ServiceCard dataOS={item.dataOS} title={item.title} titleColor={item.titleColor} text={item.text} img={item.img} />
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default HomeServices;