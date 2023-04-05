import { Box, Container, Grid, Typography } from "@mui/material"
import { useState } from "react";
import CustomButton from "../../components/button";
import Slider from "../../components/slider/slider";
import useStyles from './style'

const HomeBanner = ({ isArabic,fade, setFade,banner, launchWithUs,scrollToSection}) => {
    let classes = useStyles()
    // const [fade, setFade] = useState(false)

    const triggerFade = () => {
        setFade(prevState => {
            return !prevState
        })
    }

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Box ref={banner} position='relative'>
            <Box className={classes.overlay}></Box>
            {/* <video className={classes.video} loop autoPlay>
                <source src="assets/landing-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <Slider/>
            <Container>
                <Grid container>
                    <Grid lg={12} md={12} sm={12} xs={12} className={classes.videoText}>
                        <Box className={classes.bannerInner}>
                            <Box textAlign="center">
                                <Typography
                                onAnimationEnd={triggerFade}
                                    data-aos='fade-in'
                                    sx={{
                                        opacity: 'inherit !important',
                                        fontSize: {
                                            xs: 18,
                                            sm: 20,
                                            md: 24,
                                            lg: 34
                                        }
                                    }}
                                    variant="h4"
                                    component="h1"
                                    className={classes.bannerHeading}
                                >{!isArabic ? `By you believing in your talent, We'll` : 'بإيمانك بموهبتك نصنع معًا'} <br /> {!isArabic ? "build your" : ''}  <Typography
                                    sx={{
                                        fontSize: {
                                            xs: 18,
                                            sm: 20,
                                            md: 24,
                                            lg: 34
                                        },
                                        fontWeight: 700
                                    }}
                                    className={classes.headingUnderline} variant="h4" component="span"> {isArabic ? "إنطلاقتك الأولى" : "First Launch"}</Typography>  {!isArabic ? "together." : ''}</Typography>
                                <CustomButton onClick={(e)=>scrollToSection(e,launchWithUs)} color="#ff9800" customSx={{ ml: 1, mt: 5, px: 2, py: 1, color: 'text.primary', boxShahdow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)' }} text=" Check out our services " />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default HomeBanner;