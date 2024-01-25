import { Stack, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Navbar />
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
      <Footer />
    </Stack>
  );
};

export default Layout;
