import React from "react";
import { Box, Div2 } from "./Navbar.styled.js";
import { Link, Outlet } from "react-router-dom";

export default function Contacts() {
  return (
    <>
      <Box>
        Contacts Page
        <Div2>
          <Link to="/dashboard/contacts/1">Contact1</Link>
          <Link to="/dashboard/contacts/2">Contact2</Link>
          <Link to="/dashboard/contacts/new">Create contact</Link>
        </Div2>
        <Outlet />
      </Box>
    </>
  );
}
