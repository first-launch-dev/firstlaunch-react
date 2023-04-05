import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  para: {
    fontSize: 14,
    color:
      theme.palette.mode == "dark"
        ? theme.palette.text.dprimary
        : theme.palette.text.primary,
    fontWeight: 400,
  },
  paraLast: {
    fontSize: 14,
    color: theme.palette.text.primary,
    fontWeight: 400,
  },
  join: {
    color: theme.palette.text.primary,
    fontSize: 14,
  },
  joinLinks: {
    textDecoration: "none",
    fontSize: 12,
    color:
      theme.palette.mode == "dark"
        ? theme.palette.text.dprimary
        : theme.palette.text.primary,
  },
  border: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
  },
  register: {
    display: "flex",
    alignItems: "center",
  },
  socialLink: {
    color: theme.palette.text.black,
  },
}));

export default useStyles;
