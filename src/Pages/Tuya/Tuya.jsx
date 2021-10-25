
import React, {Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Col,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import "./tag.css";
import Bounce from "react-reveal/Bounce";

import zigbee from '../../img/ZigBee2.png';
import wifi from '../../img/wifi.png';
import lighting from '../../img/lighting.jpeg';
import gateway from '../../img/gateaway.png';
import smartlock from '../../img/smart.jpg';
import electrical from '../../img/electrical.jpeg';
import sensor from '../../img/sensor.jpeg';
import robot from '../../img/robot.jpeg';
import energy from '../../img/energy.png'
import camera from '../../img/camera.jpeg'

class  Tuya extends Component {
    state = {
        Tag:[],
    };
componentDidMount() {
    
        axios.get("https://apihomeautomation.herokuapp.com/api/Tag/").then(response => {
            this.setState({Tag:response.data})
        })
     
     .catch (function(error) {
        console.log(error);
    })
    }
render() {
return (
    <div>
    <div className="image-container">
    <div class="row ">
    <div class="col-lg-6 col-md-6 col-12">
      <Bounce left>
      <div className="box">
      
        <img className="img-fluid" src={zigbee}  />

         
        </div>
      </Bounce>
    </div>
    <div class="col-lg-6 col-md-6 col-12">
    <Bounce right>
    <div className="box">
    
    
        <img className="img-fluid" src={wifi} />
  
 
      </div>
    </Bounce>
  </div>
   
     </div>
     </div>


      <div>
      <div class="container">
        <div class="photobanner">
        <Link to={`/Lighting`}><img class="first" src={lighting} alt='' /> </Link>
        <Link to={`/smartlock`}><img src ={smartlock}/></Link>
        <Link to={`/Gateway`}><img src={gateway}/></Link>
        <Link to={`/Electrical`}><img src={electrical}/></Link>
        <Link to={`/Sensor`}><img src={sensor}/> </Link>
        <Link to={`/Robot`}><img src={robot}/> </Link>
        <Link to={`/Energy`}><img src={energy}/> </Link>
        <Link to={`/Camera`}><img src={camera}/></Link>
           </div>
          </div>
    
    </div>
   
</div>


 
  );
}};
export default Tuya;