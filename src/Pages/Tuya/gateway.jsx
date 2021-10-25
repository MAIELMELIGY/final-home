import React, { Component } from "react";
import { Link } from "react-router-dom";
import './details.css'
import axios from "axios";
class Gateway extends React.Component {
  state = {
    Gateway: [],
    filterData: [],
    Product: [],
  };

  componentDidMount() {
    axios.get("https://apihomeautomation.herokuapp.com/api/Tag/").then((response) => {
      this.setState({ Gateway: response.data });
    });
    axios
      .get("https://apihomeautomation.herokuapp.com/api/ProductTuya/")
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
        <section id="hero" classNmae="d-flex align-items-center">
          <div>
            {this.state.Gateway
              .filter((smartloack) => smartloack.Name === "Gateway")
              .map((Gateway) => {
                return (
                  <div
                    className="container position-relative"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    key={Gateway.id}>
                    <div>
                    <img className="cover" src={Gateway.img_description} />
                    </div>
                    <div class="row light-blue lighten-5 z-depth-4">
                    <div class="col-sm-3"> <img class="circle" src={Gateway.img_slider}/> </div>
                    <div class="col-sm-9">
                        <p class="name">{Gateway.Name}</p>
                       
                        <p>{Gateway.description}</p>
                    </div>
                    </div>
                    </div>
                    
                    
                  
                );
              })}
          </div>
        </section>
        <div>
          <div class="row" id="sortable">
            <div class="col-md-3">
              {this.state.Product.filter(
                (Product) => Product.tag === "Gateway"
              ).map((Product) => (
                <div class="card-sub" key={Product.id}>
                  <Link className="link" to={`/Gateway/${Product.id}`}>
                    <img class="card-img-top img-fluid" src={Product.image_1} />
                    <div class="card-block">
                      <h4 class="card-title">{Product.Name}</h4>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gateway;
