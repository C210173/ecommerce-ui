import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrandAction } from "../../../redux/brand/Action";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BrandSlides = () => {
  const dispatch = useDispatch();
  const allBrand = useSelector((store) => store.brand.allBrand);
  useEffect(() => {
    dispatch(getAllBrandAction());
  }, [dispatch]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {allBrand.length > 0 && (
        <Carousel
          arrows={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          {allBrand.map((brand) => (
            <div key={brand.id} className="mx-8">
              <img
                className="w-[160px] h-[160px] object-contain"
                src={brand.imageUrl}
                alt={brand.name}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default BrandSlides;
