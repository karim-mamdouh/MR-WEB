import React from "react";
import { Stack, Box, Typography, Button, useMediaQuery } from "@mui/material";
import ImagesSrc from "./../../../utils/ImagesSrc";

const UnderConstructionPage = () => {
  const mobileImageSrc = ImagesSrc.responsiveUnderConstruction;
  const webImageSrc = ImagesSrc.UnderConstruction;
  const isWeb = useMediaQuery("(min-width: 768px)");
  return (
    <Stack>
      <Box
        component="img"
        maxWidth="100%"
        src={isWeb ? webImageSrc : mobileImageSrc}
        sx={{ objectFit: "cover" }}
      />
      <Stack sx={{ alignItems: "center", gap: "15px", marginTop: "30px" }}>
        {" "}
        <Typography variant="h4" fontSize={{ xs: "20px", sm: "35px" }}>
          Upcoming Projects
        </Typography>
        <Typography variant="h4" fontSize={{ xs: "16px", sm: "24px" }}>
          Under Construction
        </Typography>
        <Button
          variant="fill"
          sx={{
            width: "fit-content",
            fontSize: { xs: "18px", sm: "24px" },
          }}
        >
          Show all Upcoming Events & Projects
        </Button>
      </Stack>
    </Stack>
  );
};

export default UnderConstructionPage;
