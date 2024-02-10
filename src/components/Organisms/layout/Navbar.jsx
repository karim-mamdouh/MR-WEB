import React from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import ImagesSrc from "../../../utils/ImagesSrc";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about-us",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Contacts",
      path: "/#contacts-section",
      onClick: () => {
        navigate("/"); // Navigate to the home page
        setTimeout(() => handleScrollToSection("contacts-section"), 100); // Scroll after the route change
      },
    },
  ];
  const location = useLocation();
  const termsAndConditionsPage = location.pathname.includes("terms");
  return (
    <Stack
      sx={{
        justifyContent: "space-around",
        paddingY: "10px",
        flexDirection: "row",
        position: termsAndConditionsPage ? "unset" : "absolute",
        zIndex: 1,
        width: "100%",
        margin: "auto",
        paddingLeft: "20px",
        paddingRight: { xs: "20px", sm: "70px" },
      }}
    >
      <Box component={"figure"} width={{ xs: "60px", sm: "120px" }}>
        <Box component={"img"} maxWidth="100%" src={ImagesSrc.logo} />
      </Box>
      <Stack
        sx={{
          flexDirection: "row",
          gap: { xs: "12px", sm: "70px" },
          height: "fit-content",
        }}
      >
        {" "}
        {navLinks.map((link, i) =>
          link.onClick ? (
            <span
              key={i}
              onClick={link.onClick}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: termsAndConditionsPage ? "#000" : "#fff",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {link.name}
            </span>
          ) : (
            <NavLink
              key={i}
              to={link.path}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#0de3e6",
                      textAlign: "center",
                    }
                  : {
                      fontSize: "14px",
                      fontWeight: 500,
                      color: termsAndConditionsPage ? "#000" : "#fff",
                      textAlign: "center",
                    }
              }
            >
              {link.name}
            </NavLink>
          )
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
