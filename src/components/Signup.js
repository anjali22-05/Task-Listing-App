// import { useNavigate,Link as RouterLink,Navigate,Link } from "react-router-dom";
// export default function Signup() {
//     return (
//         <>
// <h1>This is the Signup</h1>
// <form>
//     <label>
//         <input type="text" name="Name" placeholder="enter your  Nmae" required />
//     </label>
//     <input type="text" name="email"placeholder="enter your email" required />
//     <label>
//         <input type="integer" name="phone" placeholder="enter your phone number" required />
//     </label>
//     <label>
//         <input type="text" name="Password" placeholder="enter your Password" required />
//     </label>
//     <label>
//         <input type="text" name="Confirm Password" placeholder="enter your Confirm Password" required />
//     </label>
//     <label>
//         <input type ="text" name="Address" placeholder="enter your Address" required />
//     </label>
//     <label>
//         <input type="submit" value="Submit" />
//     </label>
// </form>
// <Link component={RouterLink} to="/login">Go to Login</Link>
//         </>
//     )
// }       
import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
} from "@mui/material";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", formData);

    // Example: Navigate to login after successful signup
    navigate("/login");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, width: "100%" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Signup
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            multiline
            rows={2}
            fullWidth
          />
          <Button type="submit" variant="contained" size="large" fullWidth>
            Signup
          </Button>
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <Link component={RouterLink} to="/login" underline="hover">
              Go to Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
