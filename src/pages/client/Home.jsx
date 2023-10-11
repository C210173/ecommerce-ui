import React from "react";
import HomeSlides from "./layout/HomeSlides";
import ProductList from "./components/ProductList";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";

const Home = () => {
  return (
    <DefaultHomeLayout
      children={
        <div>
          <div className="mt-20">
            <HomeSlides />
          </div>
          <div className="w-full mb-10">
            <ProductList />
          </div>
        </div>
      }
    />
  );
};

export default Home;
