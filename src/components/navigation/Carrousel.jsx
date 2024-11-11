import React, { Component } from "react";
import { useAuth } from "../../context/AuthProvider";

export default class Carrousel extends Component {
  render() {
    
    return (
      
      <>
  
  <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img
            src="https://i.postimg.cc/BvmT3Fg2/15.jpg"
            alt="Drink" width="500" height="700" border='0'
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.postimg.cc/hjwVzqNj/14.jpg"
            alt="Drink" width="500" height="700" border='0'
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.postimg.cc/j5CzSjgm/12.jpg"
            alt="Drink" width="500" height="700" border='0'
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.postimg.cc/D0JQF8Jw/10.jpg"
            alt="Drink" width="500" height="700" border='0'
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.postimg.cc/YCwfzM0L/11.jpg"
            alt="Drink" width="500" height="700" border='0'
          />
        </div>
      </div>
      </>
    );
  }
}
