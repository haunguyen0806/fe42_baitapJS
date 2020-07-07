import React from 'react';
import ProductSP from "./productSP.js"

export default function Smartphone(){
    return(
    <section section id = "smartphone"
    className = "container-fluid pt-5 pb-5 " >
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <ProductSP />
        <ProductSP />
        <ProductSP />
        <ProductSP />
      </div>
    </section>
    );
}