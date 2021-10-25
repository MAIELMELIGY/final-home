import React, { Component } from "react";
import "./busproDetails.css";
import { Jumbotron } from "reactstrap";
import axios from "axios";
import Fade from 'react-reveal/Fade';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

class KnxDetails extends Component {
  state = {
    Product: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://apihomeautomation.herokuapp.com/api/ProductHdl/?id=${this.props.match.params.id} `

      )

      .then((response) => {
        this.setState({ Product: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <div className="details_hdl">
      {this.state.Product.map((item) => (
        <div>
        <div className="section_1">
        <Fade bottom>
          <Jumbotron
            style={{
              backgroundImage: `url(${item.image_1})`,
              backgroundSize: "cover",
            }}
          >
          <div className="content">
          <div className="row">
            <h3>{item.Name}</h3>
            </div>
            <div className="row">
          
            <p>{item.description}</p>
            </div>
            </div>
          </Jumbotron>
          </Fade>
  
          <div className="video_file">
          <video className="vid" src={item.videofile} autoPlay={true} muted={true} controls/>
            </div>
            <div className="vid-content">
            <p>{item.feature} </p>
            
            </div>
 
        </div>
        <div>
        <div class="slider">
        <Carousel responsive={responsive}>
        <div><img src={item.image_slider1}/></div>
        <div><img src={item.image_slider2}/></div>
        <div><img src={item.image_slider3}/></div>
        <div><img src={item.image_slider4}/></div>
        </Carousel>
        </div>
        </div>
        </div>

      ))}
    </div>
    );
  }
}
export default withRouter(KnxDetails);




