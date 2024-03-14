import { useState } from "react";
import axios from "axios";
// Login Component
const AdminLogin = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Make a request to the login endpoint to authenticate the admin
        const response = await axios.post('http://localhost:8080/api/loginAdminWithEmail', formData);
        const token = response.data.token;
        // Store the token securely (e.g., in local storage)
        localStorage.setItem('adminToken', token);
        // Redirect or navigate to the admin dashboard
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  };

  export default AdminLogin;