import { Image } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material"

const HomePartner = () => {
    return (
        <Box sx={{ bgcolor: 'background.secondary' }} pt={5} pb={5}>
            {/* <Container> */}
            <Grid container>
                <Grid
                    data-aos='fade-in'
                    lg={6} md={6} sm={12} xs={12}>
                    <Box textAlign='center'>
                        <img style={{ filter: "contrast(200%) brightness(150%) invert(50%)" }} src="assets/gea-gov-sa.png" alt="" />
                    </Box>
                </Grid>
                <Grid
                    data-aos='fade-in'
                    lg={6} md={6} sm={12} xs={12}>
                    <Box textAlign='center'>
                        <img style={{ filter: "contrast(200%) brightness(150%) invert(50%)" }} src="assets/media-gov-sa.png" alt="" />
                    </Box>
                </Grid>
            </Grid>
            {/* </Container> */}
        </Box>
    )
}

export default HomePartner;