import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CustomBox = styled("div")(({ theme }) => ({
  paddingTop: "10rem",
  paddingBottom: "8rem",
  maxWidth: "47.25rem",
  marginLeft: "auto",
  marginRight: "auto",

  "& .refundBox": {
    borderRadius: "4px",
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
    backgroundColor: "#424242",
    padding: "2.5rem",
  },
  "& .heading": {
    fontSize: "1.5rem",
    color: "#fb8c00",
    paddingBottom: "1.5rem",
    fontWeight: "500",
  },
  "& .secondHeading": {
    fontSize: "1.5rem",
    color: "#fb8c00",
    paddingBottom: "0.15rem",
    fontWeight: "400",
  },
  "& .para": {
    fontSize: "1rem",
    paddingBottom: "0.75rem",
  },
  "& .para2": {
    paddingBottom: "0.15rem",
  },
}));

const RefundPolicy = () => {
  return (
    <>
      <Box sx={{ bgcolor: "background.secondary" }}>
        <Container>
          <CustomBox>
            <Box className="refundBox">
              <Typography className="heading">
                Refund of paid money shipped through the First Launch platform
              </Typography>
              <Typography className="para">
                The balance is returned by the project owner opening a technical
                support ticket or sending an email asking for his money back
                before starting the project and finally approving it.
              </Typography>
              <Typography className="secondHeading">
                The return process is subject to several conditions, including:
              </Typography>
              <ul>
                <li className="para2">
                  Terms of the payment method (PayPal and credit cards), for
                  example, if the payment method does not provide the option to
                  return the amount, we cannot do so from the Intilaaqah
                  platform.
                </li>
                <li className="para2">
                  If the payment method provides the return within a specific
                  period, then we are obligated to this period, which ranges
                  from 7 to 14 working day, so we ask you, dear customer, to
                  confirm by reading the terms of the payment method you use
                  before paying and then follow up with the support team at the
                  first launch platform.
                </li>
                <li className="para2">
                  The return is done exclusively to the payment method that was
                  used as we carry out a refund process for the sums to be
                  recovered according to the terms and conditions related to the
                  final approval of the work, where the customer can recover the
                  full amount before the final approval of the project by him,
                  and the refund process is subject to the amount of effort
                  accomplished in the work plan and the completion of a draft
                  The project, which does not exceed 10 to 20 percent of the
                  value of the package or service and its requirements.
                </li>
              </ul>
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </>
  );
};

export default RefundPolicy;
