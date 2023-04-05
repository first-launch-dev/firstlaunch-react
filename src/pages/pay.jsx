import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Container } from '@mui/system';
import CustomButton from '../components/button';
import { Grid } from '@mui/material';
import { useLocation, useParams } from 'react-router';

export default function Pay() {
    const params = useLocation()
    let service = params?.search?.split('=')[1]
    service = service.replace(/%20/g, " ");
    const [orderDisabled, setOrderDisabled] = React.useState(true)
    const [payDisabled, setPayDisabled] = React.useState(false)
    return (
        <Box my={15}>
            <Container>
                <Grid container justifyContent="center" >
                    <Grid lg={4} md={6}  sm={12} xs={12}>
                        <Card >
                            <CardHeader
                                title={service}
                                sx={{ textAlign: 'center', textTransform: 'capitalize' }}
                            />
                            <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
                                <CustomButton text="Order Now" disabled={orderDisabled} />
                                <CustomButton onClick={()=>{
                                    setOrderDisabled(false)
                                    setPayDisabled(true)
                                    localStorage.getItem('link')
                                    window.open(localStorage.getItem('link'), '_blank');
                                    // window.location.href = "http://www.w3schools.com";
                                }} color="#ff9800" disabled={payDisabled} customSx={{ ml: 1 }} text="Pay Now" />
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid >
            </Container>
        </Box>
    );
}