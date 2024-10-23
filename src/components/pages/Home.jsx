import { Button, Typography, Stack, Grid } from '@mui/material';

function HomePage() {
  return (
    <Stack 
      direction="row" 
      sx={{ justifyContent: 'space-around' }} // Fixed height
    >
      {/* Left Section */}
      <Stack 
        sx={{ 
          p: 4,
          width: '50%',
        }} 
        spacing={2}
        m={10}
      >
     
        <Typography variant="h4">
          Welcome to My Website
        </Typography>
        <Typography variant="body1" sx={{ width: '75%' }}  pb={5}>
          Discover amazing content and features designed to enhance your experience. Join us and explore what we have to offer.
        </Typography>

       
       
          <Button 
            variant="contained" 
            color="success"
            sx={{ width: 'auto', alignSelf: 'flex-start' }} 
          >
            Get Started
          </Button>
        
      </Stack>

      {/* Right Section */}
      <Grid  m={4}>
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg" 
          alt="car Not Found" 
          style={{ borderRadius: '20px 20px' }}
        />
      </Grid>
    </Stack>
  );
}

export default HomePage;
