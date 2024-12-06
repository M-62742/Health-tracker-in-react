import React, { useState } from "react";
import "../components css/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        alert("Login successful!");
        
        window.location.href = "/health-tracker";
        navigate("/health-tracker");
      } else {
        alert("Please verify your email before logging in.");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

// console.log(formData);
  return (
    <div>
      <h1>Login Here</h1>

      <form className="formlog" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <a href="/Signup">Don't have an account?</a>
      </form>
    </div>
  );
}

export default Login;
