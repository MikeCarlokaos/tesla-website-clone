import React from "react";
import products from "../../../../data/home/products";
import ProductSlide from "../../../common/home/ProductSlide";

const Products = () => {
  const ProductCatalog = products.map((product, index) => {
    return <ProductSlide key={product.id} {...product} index={index} />;
  });

  return (
    <div className="relative z-10">
      <div className=" w-full h-screen scroll-smooth overflow-y-scroll snap-y snap-mandatory">
        {ProductCatalog}
      </div>
    </div>
  );
};

export default Products;
