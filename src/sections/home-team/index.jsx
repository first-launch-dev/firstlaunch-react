import { Image } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material"
import useStyles from './style'
import Slider from "react-slick";
import ServiceCard from "../../components/cards/service";

const HomeTeam = ({ourTeam}) => {
    const classes = useStyles();
    const settings = {
        infinite: true,
        arrows: false,
        dots: false,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const team = [
        {
            name: 'Abdullah Mohammed - SAMT',
            des: 'Composer',
            img: 'assets/1.png'
        },
        {
            name: 'Adel Zaki',
            des: 'Director',
            img: 'assets/2.png'
        } ,
        {
            name: 'Ahmad Qandil',
            des: 'Assistant Director',
            img: 'assets/3.png'
        } ,
        {
            name: 'Elaf Saab',
            des: 'Photographer & Video',
            img: 'assets/5.png'
        } ,
        {
            name: 'Fatmah Alamoudi',
            des: 'Make-up Artist',
            img: 'assets/6.png'
        } ,
        {
            name: 'Hassan Basrawi',
            des: 'Model',
            img: 'assets/7.png'
        } ,
        {
            name: 'Hayfa Hussain',  
            des: 'Photographer & Video',
            img: 'assets/8.png'
        } ,
        {
            name: 'Majed Aldossari',  
            des: 'Musician',
            img: 'assets/10.png'
        } ,
        {
            name: 'Maram Qadi',  
            des: 'Model',
            img: 'assets/11.png'
        } ,
        {
            name: 'Marwan Alshehri',  
            des: 'Singer',
            img: 'assets/13.png'
        } ,          
        {
            name: 'Nesreen',  
            des: 'Make-up Artist',
            img: 'assets/14.png'
        } ,
        {
            name: 'Osama Bugis',  
            des: 'Singer',
            img: 'assets/15.png'
        } ,
        {
            name: 'Rafal Qassem',  
            des: 'Photographer & Video',
            img: 'assets/16.png'
        } ,
        {
            name: 'Rawan Abdullah',  
            des: 'Model',
            img: 'assets/17.png'
        } ,
        {
            name: 'Rawan Hussain',  
            des: 'Photographer & Video',
            img: 'assets/18.png'
        } ,
        {
            name: 'Saleh Kashogji',  
            des: 'Musician & Guitarist',
            img: 'assets/19.png'
        } ,
        {
            name: 'Shahad Bajaafar',  
            des: 'Musician & Pianist',
            img: 'assets/20.png'
        } ,
        {
            name: 'Turkan Alayoub',  
            des: 'Actor & Dance Instructor',
            img: 'assets/21.png'
        } ,

    ]
    return (
        <Box ref={ourTeam} sx={{ bgcolor: 'background.secondary' }} pt={8} pb={8}>
            <Container sx={{ position: 'relative' }}>
                <Box textAlign="center">
                    <Typography className={classes.serviceHeading} variant="h4" component="h4" mb={7}>Our Team</Typography>
                </Box>
                <Slider {...settings}>
                    {
                        team.map((item,key)=>{
                            return(
                                <ServiceCard key={key} dataOS={'fade-in'} width="100%" title={item.name} text={item.des} img={item.img} />

                            ) 
                        })
                    }
                    {/* <ServiceCard dataOS={'fade-in'} width="100%" title="Hayfa Hussain" text="Photographer & Video" img="assets/1.png" />
                    <ServiceCard dataOS={'fade-in'} width="100%" title="Rawan Abdullah" text="Model" img="assets/2.png" />
                    <ServiceCard dataOS={'fade-in'} width="100%" title="Hassan Basrawi" text="Model" img="assets/3.png" />
                    <ServiceCard dataOS={'fade-in'} width="100%" title="Hassan Basrawi" text="Model" img="assets/3.png" />
                    <ServiceCard dataOS={'fade-in'} width="100%" title="Hassan Basrawi" text="Model" img="assets/3.png" /> */}
                </Slider>
                {/* </Grid> */}
            </Container>
        </Box>
    )
}

export default HomeTeam;