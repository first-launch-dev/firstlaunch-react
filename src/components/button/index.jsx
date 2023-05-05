import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  const {
    color,
    text,
    customSx,
    textColor,
    Icon,
    disabled,
    type = "button",
    isLoading = false,
    ...rest
  } = props;
  const theme = useTheme();
  return (
    <Button
      // data-aos="fade-zoom-in"
      {...rest}
      disabled={disabled ? disabled : false}
      type={type}
      sx={{
        border: `1px solid ${theme.palette.border.primary}`,
        color: textColor ? textColor : "#000",
        textTransform: "Capitalize",
        background: color ? color : "",
        ...customSx,
      }}
    >
      {" "}
      {Icon ? <Icon sx={{ marginRight: 1 }} /> : ""}{" "}
      {isLoading ? "Loading.." : text}
    </Button>
  );
};

export default CustomButton;
