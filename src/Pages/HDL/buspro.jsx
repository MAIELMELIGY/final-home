import React, { Component } from "react";
import { Link } from "react-router-dom";
import './buspro.css'
import axios from "axios";
class Buspro extends React.Component {
  state = {
    Buspro: [],
    filterData: [],
    Product: [],
  };

  componentDidMount() {
    axios
      .get("https://apihomeautomation.herokuapp.com/api/ProductHdl/")
      .then((response) => {
        this.setState({ Buspro: response.data });
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
        <div className="main">
        <div class="row" id="sortable">
            <div class="col-lg-3 col-md-4 col-sm-6">
            {this.state.Buspro
              .filter((Buspro) => Buspro.SubCategory=== "Buspro")
              .map((Buspro) => {
                return (
                
                    <div class="card-sub" key={Buspro.id}>
                    <Link className="link" to={`/Buspro/${Buspro.id}`}>
                      <img class="card-img-top img-fluid" src={Buspro.image_slider1} />
                      <div class="card-block">
                        <h4 class="card-title">{Buspro.Name}</h4>
                      </div>
                    </Link>
                  </div>
             
                );
              })}
          </div>
     
        <div>
         </div>
         </div>
         </div>

    );
  }
}

export default Buspro;
