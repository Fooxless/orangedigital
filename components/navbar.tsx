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
import bg from '../public/detail-page-bg.png';
import Grid from '@mui/material/Grid';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';

const pages = [{ name: 'Gallery', url: '/' }, { name: 'Details Page', url: '/details' }];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState<any>('');

  const [information, setInformation] = useState<any>(null)
  console.log("information", information)
  useEffect(() => {
    fetch('/api/information', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setInformation(data)
      })
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getWindow = async () => {
    if (window?.location?.pathname === "/details") { setCurrentPage('Details Page') }
    else { setCurrentPage('Gallery'); }
  }

  useEffect(() => { getWindow() });
  if (currentPage === 'Gallery') {


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
  else {
    return (
      <AppBar position='static' sx={{
        background: 'linear-gradient(90deg, rgba(128,99,193,1) 0%, rgba(48, 35, 123,1) 100%)', height: "350px",
        backgroundImage: `url(${bg.src})`, backgroundSize: 'cover',

      }}>
        <CssBaseline />
        <div style={{
          zIndex: 1, height: "100%", width: "100%",
          position: "relative", overflow: "auto", top: "0px", left: "0px", background: 'rgba(48, 35, 123,0.9)',
        }}>
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
          <Box sx={{
            m: 3,
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 550,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            position: "absolute",
            bottom: "20px"

          }}>
            <Typography variant="h4">{information?.detailsPage?.title}</Typography>
            <Box sx={{ display: "flex", marginTop: "10px", }} >
              <Grid item container spacing={1} >
                <Grid item sx={{ display: 'flex', }} >
                  <Typography variant="body1">By: {information?.detailsPage?.author}</Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', }}>
                  <Typography variant="body1">At: {information?.detailsPage?.location}</Typography>
                </Grid>

              </Grid>
              <Box sx={{ display: 'flex', position: "relative", top: "20px" }}>
                <FavoriteRoundedIcon sx={{ position: "relative", color: "#EBEFEE", fontSize: 18, marginRight: 0.5, top: "2px" }} />
                <Typography variant="body1">{information?.detailsPage?.likes}</Typography>
                <ChatBubbleRoundedIcon sx={{ position: "relative", color: "#EBEFEE", fontSize: 18, marginRight: 0.5, marginLeft: "20px", top: "2px" }} />
                <Typography sx={{}} variant="body1">{information?.detailsPage?.comments}</Typography>
              </Box>

            </Box>

            <Typography sx={{ marginTop: "10px" }} variant="body1">On: {information?.detailsPage?.release}</Typography>
          </Box>
        </div>
      </AppBar >
    );
  }
}

export default Navbar;