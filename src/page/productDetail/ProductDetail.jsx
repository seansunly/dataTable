import React from 'react'
import { Card } from "flowbite-react";
import CardProductDetail from '../../components/cardt/CardProductDetail';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {

    const location=useLocation();
    console.log("location show ", location.state);

    const product = location.state
    
    // access product data from the parent component
  return (
    <section className=" mt-24 flex justify-center items-center h-[90vh]">
      <CardProductDetail
        image={product.image}
        description={product.description}
        price={product.price}
        title={product.title}
      />
    </section>
  );
}
