import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import TextFieldInput from "../../../common/components/TextFieldInput/TextFieldInput";

const HomePage = () => {
  return (
    <Stack sx={{ gap: "40px" }}>
      <video
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "fill",
        }}
        controls
        autoPlay
        muted
        loop
      >
        <source
          src={
            "https://www.shutterstock.com/shutterstock/videos/3398791279/preview/stock-footage-batroun-lebanon-may-boats-docked-in-the-port-of-batroun.mp4"
          }
        />
      </video>
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", gap: "50px" }}
      >
        <Typography variant="h3" sx={{ fontSize: "40px" }}>
          Mediterranean Roots
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            textAlign: "center",
            width: "70%",
            margin: "auto",
          }}
        >
          Mediterranean Roots (MR) is a non-profit organization founded in Malta
          to connect with individuals and communities across Europe who
          appreciate and value our Mediterranean roots. The key objective of MR
          is to preserve, promote, and celebrate the rich cultural tapestry of
          our region. This involves engaging with artists, musicians, educators,
          and enthusiasts to build a vibrant community dedicated to the
          preservation and celebration of our heritage.
        </Typography>
        <Button variant="fill">About Us</Button>
        {/* Contact Us */}
        <Typography variant="h3" sx={{ fontSize: "40px" }}>
          Contact Us
        </Typography>
        <Stack
          width="60%"
          sx={{ justifyContent: "center", gap: "10px", alignItems: "center" }}
        >
          <TextFieldInput
            placeholder="First name"
            name="first_name"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <TextFieldInput
            placeholder="Middle name"
            name="middle_name"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <TextFieldInput
            placeholder="Last name"
            name="last_name"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <TextFieldInput
            placeholder="Email Address"
            name="email"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <TextFieldInput
            placeholder="Write here your message"
            name="message"
            rows={5}
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            variant="fill"
            sx={{ backgroundColor: "#3898ec", width: "fit-content" }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomePage;
