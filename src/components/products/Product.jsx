import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

export default function Product({name,precio,descripcion}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl m-2">
      <figure className=" ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
}
