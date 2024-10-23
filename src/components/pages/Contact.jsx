import { Container, TextField, Button, Typography, Box, Stack } from '@mui/material';
import { useState} from 'react'; 


function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending the form data to a server.
    console.log(formData);
    // Clear the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary">
          We&apos;d love to hear from you! Please fill out the form below and we&apos;ll get back to you as soon as possible.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Stack>

        <Box sx={{ mt: 4, textAlign: 'center',marginBottom:'5%', }}>
          <Button type="submit" variant="contained" color="primary" size="large">
            Send Message
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default ContactPage;
