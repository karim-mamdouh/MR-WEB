import React, { useEffect, useState } from "react";
import { Stack, Typography, Button, CircularProgress } from "@mui/material";
import TextFieldInput from "../../../common/components/TextFieldInput/TextFieldInput";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      middle_name: "",
      message: "",
      email: "",
    },
    // validationSchema: LoginSchema(t),
    onSubmit: (values) => {
      // console.log(values);
      setIsLoading(true);

      sendEmail(values);
    },
  });
  const sendEmail = (emailData) => {
    window.emailjs
      .send("service_mcpfre6", "template_xils9yl", emailData)
      .then((response) => {
        // console.log("Email sent successfully:", response);
        setIsLoading(false);
        toast.success("Email sent successfully");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Error sending email");
      });
  };
  useEffect(() => {
    // Initialize EmailJS with your user ID
    window.emailjs.init("itsTwYD2_G8KSoagx");
  }, []);
  return (
    <Stack sx={{ gap: "40px" }}>
      {/* <video
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
            "https://www.shutterstock.com/shutterstock/videos/1093274369/preview/stock-footage-comino-island-malta-blue-lagoon-summer-boats-blue-sea.mp4"
          }
        />
      </video> */}
      <iframe
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "fill",
        }}
        src="https://www.youtube.com/embed/JoK-HwyqLec?si=4XUHUFfyQXft7g5f&amp;autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "30px", sm: "50px" },
        }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: "25px", sm: "40px" } }}>
          Mediterranean Roots
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "16px", sm: "20px" },
            textAlign: "center",
            width: { xs: "90%", sm: "70%" },
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
        <Button
          variant="fill"
          sx={{ fontSize: "25px" }}
          onClick={() => navigate("/about-us")}
        >
          About Us
        </Button>
        {/* Contact Us */}

        <div style={{ width: "100%", margin: "auto" }} id="contacts-section">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "25px", sm: "40px" },
              marginBottom: { xs: "30px", sm: "50px" },
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
          <Stack
            width={{ xs: "90%", sm: "50%" }}
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <TextFieldInput
              placeholder="First name"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <TextFieldInput
              placeholder="Middle name"
              name="middle_name"
              value={formik.values.middle_name}
              onChange={formik.handleChange}
              error={
                formik.touched.middle_name && Boolean(formik.errors.middle_name)
              }
              helperText={
                formik.touched.middle_name && formik.errors.middle_name
              }
            />
            <TextFieldInput
              placeholder="Last name"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
            <TextFieldInput
              placeholder="Email Address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextFieldInput
              multiline={true}
              placeholder="Write here your message"
              name="message"
              rows={2}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button
              variant="fill"
              type="submit"
              sx={{
                fontSize: "25px",
                backgroundColor: "#3898ec !important",
                width: "fit-content",
              }}
            >
              {isLoading ? (
                <CircularProgress
                  sx={{
                    color: "#fff",
                    marginX: "auto",
                  }}
                  size="25px"
                />
              ) : (
                "Send"
              )}
            </Button>
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
};

export default HomePage;
