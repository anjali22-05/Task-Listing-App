// import { useNavigate,Link as RouterLink,Navigate,Link } from "react-router-dom";
// export default function Login() {
//     return (
//         <>
// <h1>This is the Login</h1>
// <form>
//     <label>
//         Username:
//         <input type="text" name="username" placeholder="enter your name" required />
//     </label>
//     <label>
//     password:
//     <input type ="password" name="password" placeholder="Enter Your Password" required>
//     </input>
//     </label>
//     <button>
//         handleSubmit(){
//         }
//     </button>
// </form>
// <Link component={RouterLink} to="/signup">Go to Signup</Link>
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

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // Example: Navigate to dashboard after login
    navigate("/dashboard");
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
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Username"
            name="username"
            value={formData.username}
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
          <Button type="submit" variant="contained" size="large" fullWidth>
            Login
          </Button>
          <Typography variant="body2" align="center">
            Don’t have an account?{" "}
            <Link component={RouterLink} to="/signup" underline="hover">
              Go to Signup
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
