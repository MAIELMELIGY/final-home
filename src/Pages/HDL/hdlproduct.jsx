import React, { Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./hdl.css";
import Bounce from "react-reveal/Bounce";

import image_knx from "../../img/asset 12.png";
import image_buspro from "../../img/asset 9.png";
class Producthdl extends Component {
  state = {
    Product: [],
  };

  componentDidMount() {
    axios
      .get("https://apihomeautomation.herokuapp.com/api/Video/")
      .then((response) => {
        this.setState({ Product: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
    <div>
      <div className="image-container">
      <div class="row d-flex align-items-center">
      <div class="col-lg-6 col-md-6 col-12">
        <Bounce left>
        <div className="box">
          <Link className="link" to={`/Knx`}>
       
          <img className="img-fluid" src={image_knx} />
        </Link>
       
           
          </div>
        </Bounce>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <Bounce right>
        <div className="box">
          <Link className="link" to={`/Buspro`}>
        
            <img className="img-fluid" src={image_buspro} />
          </Link>
     
          </div>
        </Bounce>
      </div>
      </div>
        </div>
        <div className="video-contain">
 
        {this.state.Product.map((item) => (
          <div  key={item.id} className="row">
          <div className="col-lg-4">
          <video src={item.videofile_1} width="500" height="400" controls>
          </video>
          
          </div>
          <div className="col-lg-4">
          <video src={item.videofile_2} width="500" height="400" controls>
          </video>
          
          </div> <div className="col-lg-4">
          <video src={item.videofile_3} width="500" height="400" controls>
          </video>
          
          </div> <div className="col-lg-4">
          <video src={item.videofile_4} width="500" height="400" controls>
          </video>
          
          </div>
          <div className="col-lg-4">
          <video src={item.videofile_5} width="500" height="400" controls>
          </video>
          
          </div>
          </div>
          ))}
         
          <div  >
          </div>
        </div>
    </div>
  

  
     
    );
  }
}
export default Producthdl;
