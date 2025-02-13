import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <SignedIn>
        <nav className="navbar">
          
        </nav>
      </SignedIn>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

const ProtectedRoute = ({ component: Component }) => (
  <SignedIn>
    <Component />
  </SignedIn>
);

export default App;