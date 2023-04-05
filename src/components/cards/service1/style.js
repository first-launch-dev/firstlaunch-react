import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    cardHeading: {
        color: theme.palette.text.black,
        fontWeight: 300,
        fontSize: 20,
    },
    textUnderline: {
        color: theme.palette.text.secondary,
        fontWeight: 600,
    },
    text: {
        fontWeight: 300,
        fontSize: 16,
        color: theme.palette.mode == 'dark' ? theme.palette.text.dprimary: theme.palette.text.primary

    },
    price: {
        fontWeight: 300,
        fontSize: 16,
        color: theme.palette.text.black
    },
    // imgHoverZoom:{
    //     height: '250px',
    //     width: '250px',
    //     overflow: "hidden",
    //     borderRadius: "50%",
    //     border: `5px solid ${theme.palette.text.secondary}`,
    //     transition: 'transform .5s ease',
    //     '&:hover': {
    //         img:{
    //             transform: 'scale(1.5)'
    //         }
    //     },
    // },
    // img: {
    //     margin: '0 auto',
    //     // borderRadius: '50%',
    //     // objectFit: 'cover',
    //     // border: `5px solid ${theme.palette.text.secondary}`,
    //     // transition: 'transform .5s ease',
    //     // overflow: 'hidden',
    //     // height: '300px',
    //     // width: '300px',
    //     // '&:hover': {
    //     //     transform: 'scale(1.5)'
    //     // },
    // }
}));


export default useStyles;