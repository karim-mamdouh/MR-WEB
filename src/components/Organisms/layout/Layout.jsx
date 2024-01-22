import { Stack, CircularProgress, Box } from "@mui/material";
import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ImagesSrc from "./../../../utils/ImagesSrc";

const Layout = () => {
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
      path: "/contact-us",
    },
  ];
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Stack
        sx={{
          justifyContent: "space-around",
          paddingY: "10px",
          flexDirection: "row",
          position: "fixed",
          zIndex: 1,
          width: "100%",
          margin: "auto",
          paddingLeft: "20px",
          paddingRight: "70px",
        }}
      >
        <Box component={"figure"} width="120px">
          <Box component={"img"} maxWidth="100%" src={ImagesSrc.logo} />
        </Box>
        <Stack sx={{ flexDirection: "row", gap: "70px" }}>
          {" "}
          {navLinks.map((link, i) => (
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
                      color: "#fff",
                      textAlign: "center",
                    }
              }
            >
              {link.name}
            </NavLink>
          ))}
        </Stack>
      </Stack>
      <Stack flexGrow={1}>
        <Suspense
          fallback={
            <Stack
              sx={{
                marginY: "30vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size="30px" sx={{ marginX: "auto" }} />
            </Stack>
          }
        >
          {" "}
          <Outlet />
        </Suspense>
      </Stack>
      Footer
    </Stack>
  );
};

export default Layout;
