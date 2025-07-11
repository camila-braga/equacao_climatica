"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { usePathname } from "next/navigation";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export default function MenuHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElMetodos, setAnchorElMetodos] = React.useState<null | HTMLElement>(null);
  const [anchorElDashboard, setAnchorElDashboard] = React.useState<null | HTMLElement>(null);

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenMetodos = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMetodos(event.currentTarget);
  };

  const handleCloseMetodos = () => {
    setAnchorElMetodos(null);
  };

  const handleOpenDashboard = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElDashboard(event.currentTarget);
  };

  const handleCloseDashboard = () => {
    setAnchorElDashboard(null);
  };

  const pathname = usePathname();

  /*Para não ter que ficar repetindo esse sx em todos os itens do menu*/
  const mainButtonBaseSx = {
    "&:hover": {
      backgroundColor: "#F57C3D",
    },
    fontFamily: josefinSans.style.fontFamily,
    fontWeight: 600,
    fontSize: 15,
  };
  /*Para não ter que ficar repetindo esse sx em todos os itens do submenu*/
  const menuItemSx = {
    fontFamily: josefinSans.style.fontFamily,
    fontWeight: 600,
    fontSize: 15,
    color: "white",
    backgroundColor: "#C63230",
    "&:hover": {
      backgroundColor: "#F57C3D",
    },
  };

  /*Para não ter que ficar repetindo esse sx em todos os itens do menu mobile*/
  const menuItemSxMobile = {
    fontFamily: josefinSans.style.fontFamily,
    fontWeight: 600,
    fontSize: 15,
    color: "white",
    backgroundColor: "#C63230",
    "&:hover": {
      backgroundColor: "#F57C3D",
    },
    "&:focus": {
      backgroundColor: "#C63230",
    },
    "&:active": {
      backgroundColor: "#C63230",
    },
  };

  return (
    <AppBar position="static"  sx={{ backgroundColor: "#C63230" }}>
      <Toolbar>
        {/* Logo */}
        <Image
          src="/logo_menu.png"
          alt="Logo"
          width={30}
          height={30}
        />

        {/* Desktop Menu */}
        {!isMobile && (
        <Box sx={{display: "flex", gap: 1, margin: "0 auto", '& .MuiButton-root': {fontFamily: josefinSans.style.fontFamily, fontWeight: 600, fontSize: 15,},}}>
            <Button color="inherit" component={Link} href="/home" sx={[mainButtonBaseSx, {borderBottom: pathname === "/home" ? "2px solid white" : "2px solid transparent",}]}>
              {/* esse sx no botão é para ficar com a barra branca embaixo da palavra quando se está nessa página. */}
              Início
            </Button>
            <Button color="inherit" component={Link} href="/about" sx={[mainButtonBaseSx, {borderBottom: pathname === "/about" ? "2px solid white" : "2px solid transparent",}]}>
              A Equipe
            </Button>
            <Button color="inherit" component={Link} href="/manifesto" sx={[mainButtonBaseSx, {borderBottom: pathname === "/manifesto" ? "2px solid white" : "2px solid transparent",}]}>
              O Manifesto
            </Button>
            <Button
              color="inherit"
              onClick={handleOpenMetodos}
              sx={[mainButtonBaseSx, {borderBottom: pathname === "/metodos" ? "2px solid white" : "2px solid transparent",}]}
            >
              Os Métodos
            </Button>
            <Menu
              anchorEl={anchorElMetodos}
              open={Boolean(anchorElMetodos)}
              onClose={handleCloseMetodos}
            >
              {[
                { label: "Introdução", href: "/metodos" },
                { label: "Linear", href: "/metodos/linear" },
                { label: "Exponencial", href: "/metodos/exponencial" },
                { label: "Logarítmica", href: "/metodos/logaritmica" },
                { label: "Potência", href: "/metodos/potencia" },
                { label: "Geométrica", href: "/metodos/geometrica" },
                { label: "Quadrática", href: "/metodos/quadratica" },
              ].map(({ label, href }) => (
                <MenuItem key={href}
                  component={Link}
                  href={href}
                  onClick={handleCloseMetodos}
                  sx={menuItemSx}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
            <Button
              color="inherit"
              onClick={handleOpenDashboard}
              sx={[mainButtonBaseSx, {borderBottom: pathname === "/dashboard" ? "2px solid white" : "2px solid transparent",}]}
            >
              Dashboard
            </Button>
            <Menu
              anchorEl={anchorElDashboard}
              open={Boolean(anchorElDashboard)}
              onClose={handleCloseDashboard}
            >
              {[
                { label: "Introdução", href: "/dashboard" },
                { label: "Linear", href: "/dashboard/linear" },
                { label: "Exponencial", href: "/dashboard/exponencial" },
                { label: "Logarítmica", href: "/dashboard/logaritmica" },
                { label: "Potência", href: "/dashboard/potencia" },
                { label: "Geométrica", href: "/dashboard/geometrica" },
                { label: "Quadrática", href: "/dashboard/quadratica" },
              ].map(({ label, href }) => (
                  <MenuItem
                    key={href}
                    component={Link}
                    href={href}
                  onClick={handleCloseDashboard}
                  sx={menuItemSx}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem
                component={Link}
                href="/home"
                onClick={handleCloseNavMenu}
                sx={menuItemSxMobile}
              >
                Início
              </MenuItem>
              <MenuItem
                component={Link}
                href="/about"
                onClick={handleCloseNavMenu}
                sx={menuItemSxMobile}
              >
                A Equipe
              </MenuItem>
              <MenuItem
                component={Link}
                href="/manifesto"
                onClick={handleCloseNavMenu}
                sx={menuItemSxMobile}
              >
                O Manifesto
              </MenuItem>
              <MenuItem
                onClick={handleOpenMetodos}
                sx={menuItemSxMobile}
              >
                Os Métodos
              </MenuItem>
              <Menu
                anchorEl={anchorElMetodos}
                open={Boolean(anchorElMetodos)}
                onClose={handleCloseMetodos}
              >
                {[
                  { label: "Introdução", href: "/metodos" },
                  { label: "Linear", href: "/metodos/linear" },
                  { label: "Exponencial", href: "/metodos/exponencial" },
                  { label: "Logarítmica", href: "/metodos/logaritmica" },
                  { label: "Potência", href: "/metodos/potencia" },
                  { label: "Geométrica", href: "/metodos/geometrica" },
                  { label: "Quadrática", href: "/metodos/quadratica" },
                ].map(({ label, href }) => (
                  <MenuItem key={href}
                    component={Link}
                    href={href}
                    onClick={handleCloseMetodos}
                    sx={menuItemSxMobile}
                  >
                    {label}
                  </MenuItem>
                ))}
              </Menu>
              <MenuItem
                onClick={handleOpenDashboard}
                sx={menuItemSxMobile}
              >
                Dashboard
              </MenuItem>
              <Menu
                anchorEl={anchorElDashboard}
                open={Boolean(anchorElDashboard)}
                onClose={handleCloseDashboard}
              >
                {[
                  { label: "Introdução", href: "/dashboard" },
                  { label: "Linear", href: "/dashboard/linear" },
                  { label: "Exponencial", href: "/dashboard/exponencial" },
                  { label: "Logarítmica", href: "/dashboard/logaritmica" },
                  { label: "Potência", href: "/dashboard/potencia" },
                  { label: "Geométrica", href: "/dashboard/geometrica" },
                  { label: "Quadrática", href: "/dashboard/quadratica" },
                ].map(({ label, href }) => (
                  <MenuItem
                    key={href}
                    component={Link}
                    href={href}
                    onClick={handleCloseDashboard}
                    sx={menuItemSxMobile}
                  >
                    {label}
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </>
        )}

      </Toolbar>
    </AppBar>
  );
}
