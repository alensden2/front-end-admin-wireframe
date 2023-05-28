import Box from "@mui/material/Box";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";

const Home = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <Box>
        <Navbar isOpen={isNavbarOpen} onToggle={handleNavbarToggle} />
        <Box sx={{ ml: isNavbarOpen ? "240px" : 0, p: 3, marginTop: "64px" }}>
          <h1>Home page</h1>
          <h4>navigate to "/inventory" for a semi-working model</h4>
          <h4>To navigate, go to the side panel and select inventory</h4>
          <h4>
            You can also navigate by going to :
            www.HOSTEDWEBDOMAIN.netlify.com/inventory
          </h4>
        </Box>
      </Box>
    </>
  );
};

export default Home;
