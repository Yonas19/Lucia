import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import a from "././Images/4c.jpg";
import b from "././Images/1c.jfif";
import c from "././Images/2a.jfif";
import d from "././Images/3b.jfif";
import e from "././Images/wavy.webp";
import f from "././Images/2c.jfif";

import g from "././Images/darkcover.jfif";
import h from "././Images/acne.jfif";
import i from "././Images/dot.jfif";
import j from "././Images/com.jfif";
import k from "././Images/dskin.jfif";
import l from "././Images/dry2.jpg";

const Paywall = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // This is where you'll integrate Chapa payment
    alert("Redirecting to Chapa...");
    navigate("/home");
  };

  return (
    <div className="paywall-bg">
      <h1>Lucia</h1>
      <h4>በፀጉሮ ወይም በቆዳዎ ላይ ለውጥ ማየት አቅቶል ???</h4>
      <h3>Hair type</h3>
      <div className="marquee">
        <div className="marquee-content">
          <img src={a} alt="" />
          <img src={b} alt="" />
          <img src={c} alt="" />
          <img src={d} alt="" />
          <img src={e} alt="" />
          <img src={f} />
        </div>
      </div>

      <h3>Skin types</h3>
      <div className="marquee2">
        <div className="marquee-content2">
          <img src={g} alt="" />
          <img src={h} alt="" />
          <img src={i} alt="" />
          <img src={j} alt="" />
          <img src={k} alt="" />
          <img src={l} />
        </div>
      </div>

      <button onClick={handlePayment}>Choose for your skin or hair</button>
    </div>
  );
};

export default Paywall;
