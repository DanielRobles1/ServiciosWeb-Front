import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

export default function Product({name,precio,descripcion, imgSrc}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl m-2">
      <figure className=" ">
        <img
          src={imgSrc}
          alt={name}
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
