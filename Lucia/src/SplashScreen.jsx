import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/paywall");
    }, 5000);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img width={100} style={{marginBottom:'20%'}} src={logo} alt="" />
      <h1 style={styles.text}>Lucia</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "black",
    flexDirection:'column',
  },
  text: {
    fontSize: "2rem",
      fontWeight: "bold",
    color:'white'
  },
};

export default SplashScreen;
