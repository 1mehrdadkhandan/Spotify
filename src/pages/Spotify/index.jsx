import { React, useRef, useState } from "react";
import BodyE from "../../components/Body";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { Contuiner } from "./element";

const Spotify = () => {
  const [backGroundNav, setbackGroundNav] = useState(false);
  const [backGrounditem, setbackGrounditem] = useState(false);
  const bodyRef = useRef();

  function scrollBody() {
    bodyRef.current.scrollTop >= 30 ?setbackGroundNav(true) :setbackGroundNav(false)
    bodyRef.current.scrollTop >= 100 ?setbackGrounditem(true) :setbackGrounditem(false)
  }
  return (
    <Contuiner>
      <div className="div">
      <div className="sidebar">
        <SideBar />
      </div>
      <div ref={bodyRef} onScroll={scrollBody} className="body">
        <div className="navbar">
          <NavBar bgColor = {backGroundNav} />
        </div>
        <div className="bodypost">
          {" "}
          <BodyE bgColor= {backGrounditem} />
        </div>
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Contuiner>
  );
};

export default Spotify;
