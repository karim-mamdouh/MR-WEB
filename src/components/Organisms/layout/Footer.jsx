import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import ImagesSrc from "../../../utils/ImagesSrc";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const footerLinks = [
    {
      id: 1,
      title: "NGO",
      links: [
        { name: "About Us", link: "/about-us" },
        { name: "Mission", link: "/under-construction" },
        { name: "Objectives", link: "/under-construction" },
      ],
    },
    {
      id: 2,
      title: "RESOURCES",
      links: [
        { name: "Projects", link: "/under-construction" },
        { name: "News", link: "/under-construction" },
      ],
    },
    {
      id: 3,
      title: "ABOUT",
      links: [
        { name: "Terms & Conditions", link: "/under-construction" },
        {
          socials: [
            { icon: <TwitterIcon />, id: 1 },
            { icon: <LinkedInIcon />, id: 2 },
            { icon: <FacebookIcon />, id: 3 },
          ],
        },
      ],
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#f5f7fa",
        borderBottom: "1px solid #e4ebf3",
        padding: "50px 30px 13px",
        marginTop: "30px",
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          width: { xs: "90%", md: "80%", lg: "60%" },
          margin: "auto",
          marginBottom: "70px",
          rowGap: "20px",
        }}
      >
        <Box component={"figure"} width="130px">
          <Box component={"img"} maxWidth="100%" src={ImagesSrc.logo} />
        </Box>
        <Stack
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "70px",
          }}
        >
          {footerLinks.map((item, index) => (
            <Stack sx={{ gap: "20px" }} key={item.id}>
              <Typography
                variant="h3"
                sx={{ fontSize: "14px", marginBottom: "5px" }}
              >
                {item.title}
              </Typography>
              {item?.links.map((link, i) => (
                <React.Fragment key={`${item.id}-${link.name}`}>
                  {link.name && (
                    <Typography
                      onClick={() => navigate(link.link)}
                      variant="h4"
                      sx={{
                        fontSize: "14px",
                        color: "#1a1b1f",
                        cursor: "pointer",
                      }}
                    >
                      {link.name}
                    </Typography>
                  )}

                  {link.socials && (
                    <Stack sx={{ flexDirection: "row", gap: "20px" }}>
                      {link.socials.map((social) => (
                        <React.Fragment key={social.id}>
                          {social.icon}
                        </React.Fragment>
                      ))}
                    </Stack>
                  )}
                </React.Fragment>
              ))}
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Divider />
      <Typography
        variant="h4"
        sx={{ fontSize: "14px", textAlign: "center", paddingTop: "15px" }}
      >
        Copyright © 2024 Mediterranean Roots
      </Typography>
    </Box>
  );
};

export default Footer;
