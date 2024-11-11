import React from "react";
import Product from "../components/products/product";

export default function Products() {
  return (
    <div className="flex">
      <Product
        name="Rambo la Tortuga"
        descripcion="Rambo es parte de una colección de animales con picos."
        precio="12"
        imgSrc="https://i.postimg.cc/mkt2Pr3k/alonso1.jpg"
      />
      <Product
        name="Rodrigo el Rinoceronte"
        descripcion="Rodrigo es parte de una colección de animales con picos."
        precio="12"
        imgSrc="https://i.postimg.cc/FsXjJfCw/alonso2.jpg"
      />
      <Product
        name="Felipe el Dragón de Comodo"
        descripcion="Felipe es parte de una colección de animales con picos."
        precio="12"
        imgSrc="https://i.postimg.cc/gcZVJysv/alonso3.jpg"
      />
      <Product
        name="Octavio el Pulpo"
        descripcion="Octavio es parte de una colección de animales con picos."
        precio="12"
        imgSrc="https://i.postimg.cc/L6kjkHr5/alonso4.jpg"
      />
    </div>
  );
}
