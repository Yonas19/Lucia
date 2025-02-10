import React from "react";
import { useNavigate } from "react-router-dom";

const Paywall = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // This is where you'll integrate Chapa payment
    alert("Redirecting to Chapa...");
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Unlock Lucia</h1>
      <button style={styles.button} onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#ffde59",
    border: "none",
    cursor: "pointer",
  },
};

export default Paywall;
