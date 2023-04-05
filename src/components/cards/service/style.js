import { makeStyles } from "@mui/styles";

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
    color:
      theme.palette.mode == "dark"
        ? theme.palette.text.dprimary
        : theme.palette.text.primary,
  },
  price: {
    fontWeight: 300,
    fontSize: 16,
    color: theme.palette.text.black,
  },
  img: {
    margin: "0 auto",
    // borderRadius: '50%',
    // objectFit: 'cover',
    // border: `5px solid ${theme.palette.text.secondary}`,
    transition: "transform .2s" /* Animation */,
    // '&:hover': {
    //     transform: 'scale(1.5)', /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    // },
  },
}));

export default useStyles;
