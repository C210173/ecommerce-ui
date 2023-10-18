import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../../redux/product/Action";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ProductSlides = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProduct = useSelector((store) => store.product.allProduct);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);

  const onProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="mb-4 flex items-center justify-center w-full">
        <div className="absolute left-[-30px] top-1/2 transform -translate-y-1/2">
          <button className="p-3 text-5xl" onClick={() => previous()}>
            <BiChevronLeft />
          </button>
        </div>
        <div className="absolute right-[-26px] top-1/2 transform -translate-y-1/2">
          <button className="p-3 text-5xl" onClick={() => next()}>
            <BiChevronRight />
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-5">
      <div className="text-center">
        <span className="font-bold text-2xl">Outstanding products</span>
      </div>
      <div className="mt-4 w-[1280px] relative">
        {allProduct.length > 0 && (
          <Carousel
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
            infinite={true}
          >
            {allProduct.map((product) => (
              <div key={product.id} className="mt-4">
                <img
                  className="w-[276px] h-[300px] object-cover rounded-md  mx-5 cursor-pointer"
                  onClick={() => onProductClick(product.name)}
                  src={product.imageUrl[0]}
                  alt={product.name}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ProductSlides;
