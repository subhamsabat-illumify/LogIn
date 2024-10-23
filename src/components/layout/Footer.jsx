import { AppBar, Toolbar, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, minHeight: '150px', py: 2 }}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Contact and Address Information */}
        <Stack direction="column" alignItems="center" spacing={1} sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="inherit">
            © 2024 MyWebsite
          </Typography>
          <Typography variant="body2" color="inherit">
            1234 Bapuji Nagar, Bhubaneswar, Odiha, 12345
          </Typography>
          <Typography variant="body2" color="inherit">
            Contact: (123) 456-7890 | Email: info@mywebsite.com
          </Typography>
        </Stack>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <IconButton color="inherit" aria-label="Facebook" href="https://facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter" href="https://twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram" href="https://instagram.com">
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
