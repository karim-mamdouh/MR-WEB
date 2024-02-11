import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ImagesSrc from "../../../utils/ImagesSrc";

const AboutUsPage = () => {
  const listItems = [
    "* Strengthen cultural expression capacity in Lebanon, Malta, and other Mediterranean countries.",
    "* Promote balanced cultural exchanges among partner countries.",
    "* Sponsor a network of political, social, and economic relations grounded in a shared vision.",
    "* Adhere to UNESCO Convention on the Protection and Promotion of cultural diversity.",
    "* Encourage the development of national policies in Lebanon and Malta's cultural sector.",
    "* Connect culture to various life domains, conceiving it as a trans-sectoral activity.",
    "* Safeguard the region's common heritage and endorse cooperation on cultural policy.",
    "* Lay the groundwork for dialogue between cultures, emphasizing the exchange of ideas and cultural activities among young people.",
  ];
  return (
    <Stack sx={{ gap: "40px", justifyContent: "center", alignItems: "center" }}>
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
            "https://www.shutterstock.com/shutterstock/videos/3398791279/preview/stock-footage-batroun-lebanon-may-boats-docked-in-the-port-of-batroun.mp4"
          }
        />
      </video> */}
      <iframe
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "fill",
        }}
        src="https://www.youtube.com/embed/nZi-brd4gCI?si=Lq-_oOl0yKMMxT4Y&amp;autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <Stack
        sx={{
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          width: "85%",
        }}
      >
        {/* about us */}
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "25px", sm: "40px" },
            color: "#333",
            textAlign: "justify",
          }}
        >
          About Us
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Box
            component="figure"
            width={{ xs: "100%", sm: "60%", lg: "35%" }}
            height="100%"
          >
            <Box
              component="img"
              maxWidth="100%"
              sx={{ objectFit: "cover" }}
              src={ImagesSrc.about1}
            />
          </Box>
          <Typography
            sx={{
              width: { xs: "100%", sm: "100%", lg: "65%" },
              fontSize: { xs: "16px", lg: "20px" },
              color: "#333",
              textAlign: "justify",
            }}
          >
            Amidst the historical tapestry of conflicts, the Mediterranean
            stands as a testament to the coexistence of civilizations and
            customs. MR, committed to fostering cultural understanding and
            dialogue, focuses on Lebanon and Malta, two nations deeply rooted in
            shared heritage. With a mission aligned with Sustainable Development
            Goals (SDGs), we strive for peace, justice, and strong institutions,
            cultural diversity, human well-being, quality education, and climate
            action. Our organization aims to bring together regional experts,
            media directors, youth activists, educators, and spiritual leaders
            to build a diverse network. We seek collaboration with governmental
            and non-governmental organizations, universities, associations,
            non-profits, private enterprises, and international institutions
            dedicated to intercultural dialogue.
          </Typography>
        </Stack>
        {/* Mission and Vision  */}
        <Typography variant="h3" sx={{ fontSize: { xs: "25px", sm: "40px" } }}>
          Mission and Vision
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "18px", lg: "24px" },
            lineHeight: "30px",
            textAlign: "justify",
          }}
        >
          Our organization serves as a bridge and crossroads, uniting cultures
          under a shared destiny. By promoting diversity within a human rights
          framework, we aim to make a significant impact on cultural
          understanding, peace, conflict prevention, and the protection of
          marginalized groups' rights. We support sustainable projects tailored
          to cultural contexts, emphasizing local ecosystem management and
          traditional occupations.
        </Typography>
        {/* Objectives */}
        <Typography variant="h3" sx={{ fontSize: { xs: "25px", sm: "40px" } }}>
          Objectives:
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          <Stack
            component="ul"
            sx={{
              listStyleType: "none",
              padding: 0,
              gap: "10px",
              width: { xs: "100%", md: "65%" },
            }}
          >
            {listItems.map((item, index) => (
              <Box
                key={index}
                component="li"
                sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  color: "#333",
                  textAlign: "justify",
                }}
              >
                {item}
              </Box>
            ))}
          </Stack>
          <Box
            component="figure"
            width={{ xs: "100%", sm: "60%", lg: "35%" }}
            height="100%"
          >
            <Box component="img" maxWidth="100%" src={ImagesSrc.about2} />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutUsPage;
