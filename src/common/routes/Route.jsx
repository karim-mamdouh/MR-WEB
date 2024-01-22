import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";
import Layout from "../../components/Organisms/layout/Layout";
import HomePage from "../../components/Pages/Home/Home.page";

const AppRoute = () => {
  return (
    <Suspense
      fallback={
        <Stack
          sx={{
            gap: "20px",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size="30px" sx={{ marginX: "auto" }} />
        </Stack>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" exact element={<HomePage />} />
          <Route path="about-us" element={<Typography>About us</Typography>} />
          <Route
            path="projects"
            element={<Typography>under construction</Typography>}
          />
          <Route
            path="news"
            element={<Typography>under construction</Typography>}
          />
          <Route
            path="*"
            element={<Typography>under construction</Typography>}
          />
        </Route>{" "}
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
