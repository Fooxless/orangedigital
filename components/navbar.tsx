import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import Link from 'next/link'


const pages = [{ name: 'Gallery', url: '/' }, { name: 'Details Page', url: '/details' }];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState<any>('');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getWindow = async () => {
    if (window?.location?.pathname === "/details") { setCurrentPage('Details Page') }
    else { setCurrentPage('gallery'); }
  }

  useEffect(() => { getWindow() });

  return (

    <AppBar position='static' sx={{
      background: 'linear-gradient(90deg, rgba(128,99,193,1) 0%, rgba(88,74,161,1) 100%)',
    }}>
      <CssBaseline />

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.url} key={page.name} style={{ textDecoration: 'none', color: 'black' }} >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}

            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            {...{ style: { textTransform: "uppercase" } }}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 550,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {currentPage}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={page.url} key={page.name} style={{ textDecoration: 'none' }} >
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <IconButton sx={{ p: 0 }}>
              <MoreVertOutlinedIcon sx={{ color: 'white', }} />
            </IconButton>

          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;