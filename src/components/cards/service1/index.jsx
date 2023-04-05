import { Box, Button, Typography } from "@mui/material";
import useStyles from "./style";

const ServiceCard1 = ({
  img,
  title,
  titleColor,
  text,
  width,
  height,
  price,
  dataOS,
}) => {
  const classes = useStyles();

  return (
    <Box data-aos={dataOS} textAlign="center" sx={{ cursor: "pointer" }}>
      <Box className="img-hover-zoom img-hover-zoom--basic">
        <img className={classes.img} src={img} alt="" />
      </Box>
      <Typography
        className={classes.textUnderline}
        variant="h5"
        mt={2}
        component="h1">
        {titleColor}
      </Typography>
      <Typography className={classes.text} variant="p" component="p">
        {text}
      </Typography>
      <Typography className={classes.price} variant="h6" component="h1">
        {price}
      </Typography>
    </Box>
  );
};

export default ServiceCard1;
