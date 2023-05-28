import Box from "@mui/material/Box";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";

const Sales = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <Box>
        <Navbar isOpen={isNavbarOpen} onToggle={handleNavbarToggle} />
        <Box sx={{ ml: isNavbarOpen ? "240px" : 0, p: 3, marginTop: "64px" }}>
          <h1>Sales page</h1>
        </Box>
      </Box>
    </>
  );
};

export default Sales;
