import { useState } from "react";
import "./Banner.css";
const Banner=({data})=>{

return(
    <div className="banner-container">
      <div className="imgtext_container">
        <img className="banner-img" src={data.image}></img>
        <div className="banner-headertext">{data.text}</div>
      </div>
    </div>
);
}
export default Banner;