import React, { useEffect, useState } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa6";
import ReviewCard from "./components/ReviewCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByNameAction } from "../../redux/product/Action";

const Product = () => {
  const { productName } = useParams();
  const dispatch = useDispatch();
  const reqProduct = useSelector((store) => store.product.reqProduct);
  useEffect(() => {
    dispatch(getProductByNameAction(productName));
  }, [dispatch, productName]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [starRating, setStarRating] = useState(0);
  const [review, setReview] = useState("");

  const handleStarClick = (rating) => {
    setStarRating(rating);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    // Gửi đánh giá (starRating) và bình luận (review) đi đây
    console.log("Rating:", starRating);
    console.log("Review:", review);
  };
  return (
    <DefaultHomeLayout
      children={
        <div className="mt-20 mb-10">
          <div className="max-w-screen-xl mx-auto ">
            <div className="py-4 flex items-center justify-between">
              <div className="w-[45%] h-[70vh]">
                {reqProduct?.imageUrl && reqProduct.imageUrl.length > 0 ? (
                  <Carousel
                    responsive={{
                      desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 1,
                      },
                    }}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                  >
                    {reqProduct?.imageUrl.map((image, index) => (
                      <div key={index} className="w-full h-[70vh] relative">
                        <img
                          src={image}
                          alt={`Product ${index}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <p>No images available</p>
                )}
              </div>
              <div className="w-[55%] h-[70vh] ml-10 flex flex-col justify-center px-10">
                <span className="text-gray-700">{reqProduct?.brand.name}</span>
                <p className="text-gray-900 text-4xl font-bold mt-2">
                  {reqProduct?.name}
                </p>
                <p className="mt-3">$ {reqProduct?.price}</p>
                <p className="mt-5">{reqProduct?.description}</p>
                <p className="mt-2">OS: {reqProduct?.operatingSystem}</p>
                <p className="mt-2">Connectivity: {reqProduct?.connectivity}</p>
                <div className="flex mt-10">
                  <div className="flex">
                    <button className="px-2 border" onClick={decreaseQuantity}>
                      <AiOutlineMinus />
                    </button>
                    <p className="leading-8 border px-2 w-[2.5rem] text-center">
                      {quantity}
                    </p>
                    <button className="px-2 border" onClick={increaseQuantity}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button className="flex rounded-md border items-center ml-10 py-1 px-3 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l">
                    <FaCartPlus />
                    <p className="ml-3 ">Add to cart</p>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-900 text-4xl font-bold mt-20">
                Customer Feedback
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="w-[20%] h-[40rem]">
                  <p className="font-semibold text-lg text-gray-700">Rating</p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} className="text-2xl">
                        {index + 1 <= 4 ? (
                          <AiFillStar className="text-yellow-400" />
                        ) : (
                          <AiOutlineStar className="text-gray-300" />
                        )}
                      </span>
                    ))}
                    <span className="text-xl ml-2">(4.0)</span>
                  </div>
                  <span className="text-gray-700">total 10 ratings</span>
                </div>
                <div className="w-[80%] h-[40rem] px-10 ">
                  <p className="font-semibold text-lg text-gray-700 ml-10">
                    Review
                  </p>
                  <div className="mt-2 overflow-auto h-[22rem]">
                    {[1, 1, 1, 1].map((item, index) => (
                      <ReviewCard />
                    ))}
                  </div>
                  <div className="mt-2 pr-10">
                    <input
                      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full"
                      placeholder="Write your title review..."
                      type="text"
                    />
                    <textarea
                      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full h-24 mt-2"
                      placeholder="Write your review..."
                      value={review}
                      onChange={handleReviewChange}
                    ></textarea>
                    <div className="mt-2 flex">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <span key={index} className="text-2xl">
                          {index <= starRating ? (
                            <AiFillStar
                              className="cursor-pointer text-yellow-400"
                              onClick={() => handleStarClick(index)}
                            />
                          ) : (
                            <AiOutlineStar
                              className="cursor-pointer text-gray-300"
                              onClick={() => handleStarClick(index)}
                            />
                          )}
                        </span>
                      ))}
                    </div>
                    <button
                      className="mt-2 py-1 px-3 rounded-full text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l"
                      onClick={handleSubmitReview}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Product;
