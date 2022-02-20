import React from "react";
import { Box, Div2 } from "./Navbar.styled.js";
import Home1 from "./Home1";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Box>
        Home Page
        <Div2>
          <Link to="/dashboard/home/1">Home1</Link>
          <Link to="/dashboard/home/2">Home2</Link>
        </Div2>
        <Outlet />
      </Box>
    </>
  );
}
