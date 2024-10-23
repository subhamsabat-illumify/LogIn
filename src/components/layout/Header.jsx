import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink} from "react-router-dom";
// import { NavLink, useNavigate } from "react-router-dom";


function Header() {
  // const navigate = useNavigate();  // Initialize useNavigate for navigation

  const handleLogout = () => {

    // localStorage.removeItem('loggedInEmail');
    sessionStorage.removeItem('loggedInEmail');
    let length = history.length;
    history.go(-length+1);
    // navigate('/', { replace: true });
  };

 

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <Stack direction="row" sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }} ml={10} mr={10}>
          {/* Left side stack with Menu and Typography */}
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="p">
              News
            </Typography>
          </Stack>

          
          <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }}>
            <NavLink to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </NavLink>
            <NavLink to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>
              About
            </NavLink>
            <NavLink to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact
            </NavLink>

            
            <Typography
              onClick={handleLogout} // OnClick event to handle logout
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              Logout
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
