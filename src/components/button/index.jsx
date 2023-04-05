import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material"


const CustomButton = ({ color, text, onClick, customSx, textColor, Icon, disabled }) => {
    const theme = useTheme()
    return <Button
    // data-aos="fade-zoom-in"
        disabled={disabled ? disabled : false}
        onClick={onClick}
        sx={{
            border: `1px solid ${theme.palette.border.primary}`,
            color: textColor ? textColor : '#000',
            textTransform: 'Capitalize',
            background: color ? color : '',
            ...customSx
        }} > {Icon ? <Icon sx={{ marginRight: 1 }} /> : ''} {text}</Button>
}

export default CustomButton;