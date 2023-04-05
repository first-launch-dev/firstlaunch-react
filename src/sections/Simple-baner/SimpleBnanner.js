import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const SimpleBnanner = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid>
            <Typography className="Heading">We are First Launch Lit. Co. for Artistic</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SimpleBnanner;
