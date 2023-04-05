import { Box, Button, Typography } from "@mui/material";
import useStyles from "./style";

const ServiceCard = ({ img, title, titleColor, text, width, dataOS, onClick }) => {
  const classes = useStyles();

  return (
    <Box onClick={onClick} data-aos={dataOS} textAlign="center" sx={{ cursor: "pointer" }}>
      <Box className="img-hover-zoom track-img img-hover-zoom--basic">
        <img className={classes.img} src={img} alt="" />
      </Box>
      {title ? (
        <Typography
          mt={title ? 2 : 0}
          className={classes.cardHeading}
          variant="h6"
          component="h1">
          {title}
        </Typography>
      ) : (
        <Typography
          mt={2}
          className={classes.textUnderline}
          variant="h5"
          component="h1">
          {titleColor}
        </Typography>
      )}
      <Typography className={classes?.text} variant="p" component="p">
        {text}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
