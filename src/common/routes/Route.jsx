import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { CircularProgress, Stack } from "@mui/material";
import Layout from "../../components/Organisms/layout/Layout";
import HomePage from "../../components/Pages/Home/Home.page";
import AboutUsPage from "../../components/Pages/AboutUs/AboutUs.page";
import UnderConstructionPage from "../../components/Pages/UnderConstruction/UnderConstruction.page";

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
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="projects" element={<UnderConstructionPage />} />
          <Route path="news" element={<UnderConstructionPage />} />
          <Route path="*" element={<UnderConstructionPage />} />
        </Route>{" "}
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
