import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import Footer from "../Footer/Footer";
import Whyus from "../Whyus/Whyus";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Service from "../Service/service";
import Client from "../Client/client";
import AboutNumber from "../About/about_number";
import Navbar from "./../Navbar/Navbar";
import Category from "../Product/category";
import VideoLooper from "react-video-looper";
import Project from "../projects/projects";

import cover from "../../img/cover.mp4";
class Home extends React.Component {
  render() {
    return (
      <div >
      

       <div className="cover">
       <video id="videoBG" autoPlay muted loop playsinline>
       <source src= {cover} type="video/mp4"/>
   </video>
       </div>

      
  

        <Service />
        <Category />
        <Project />
        <Client />
        <AboutNumber />
        <About />
        <Whyus />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
