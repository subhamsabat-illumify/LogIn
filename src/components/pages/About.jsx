import { Container, Typography, Box, Stack, Divider, Button } from '@mui/material';

function AboutPage() {
  return (
    <Container maxWidth="md">
      {/* Hero Section */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          pt: 8, 
          pb: 6, 
          backgroundColor: '#f5f5f5', 
          borderRadius: 2, 
          mb: 6 
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Our App
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          We’re here to provide you with the best user experience possible, offering features 
          that streamline your tasks, improve productivity, and ensure your data is secure.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          sx={{ mt: 4 }}
        >
          Get in Touch
        </Button>
      </Box>

      {/* About Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          About Our Application
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our application is built with a focus on user-centric design, performance, and security. 
          Whether you need to connect with us, explore new features, or manage your tasks efficiently, 
          we ensure that you have everything you need right at your fingertips.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" gutterBottom>
          What Makes Us Different
        </Typography>
        <Stack spacing={2} divider={<Divider />}>
          <Box>
            <Typography variant="h6">User-Centered Design</Typography>
            <Typography variant="body2" color="textSecondary">
              We prioritize an intuitive interface, ensuring users can easily navigate the app and perform their tasks smoothly.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6">Top-Notch Performance</Typography>
            <Typography variant="body2" color="textSecondary">
              Our app handles large data sets and heavy workloads seamlessly, so you never experience lag or delays.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6">Data Security</Typography>
            <Typography variant="body2" color="textSecondary">
              We implement industry-standard security measures to ensure your data is protected and your privacy is respected.
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ mb: 8, backgroundColor: '#f0f0f0', py: 6, px: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Key Statistics
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-around"
          spacing={4}
          sx={{ mt: 4 }}
        >
          <Box textAlign="center">
            <Typography variant="h4" color="primary">
              50K+
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Happy Users
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography variant="h4" color="primary">
              99.9%
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Uptime Guarantee
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography variant="h4" color="primary">
              24/7
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Customer Support
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Mission Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our mission is to empower individuals and businesses by providing tools that streamline processes, enhance productivity, 
          and simplify daily tasks. We strive to maintain excellence in our offerings, ensuring that our users receive top-quality 
          solutions that meet their needs efficiently and effectively.
        </Typography>
      </Box>

      {/* Final Call-to-Action */}
      <Box sx={{ textAlign: 'center', mt: 6 ,mb:6}}>
        <Typography variant="h6" gutterBottom>
          Join Thousands of Satisfied Users!
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          We’re constantly innovating and adding new features to improve your experience. Be part of a growing community that loves efficiency and simplicity.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

export default AboutPage;
