import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import useCurrentUser from "../hooks/useCurrentUser";
import Link from "next/link";

export default function TopBar() {
  const { currentUser, isLoggedIn, logOut } = useCurrentUser();

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
              }}
            >
              Petition App
            </Typography>
          </Link>

          <Box>
            {isLoggedIn ? (
              <>
                <Typography>
                  {" "}
                  Hi {currentUser && currentUser.firstName}
                </Typography>
                <Button color="inherit" onClick={logOut}>
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <Button color="primary" variant="contained" sx={{ mr: 1 }}>
                    Sign Up
                  </Button>
                </Link>
                <Link href="/login">
                  <Button color="inherit">Log In</Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
