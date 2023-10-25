import React from "react";
import HomeSlides from "./layout/HomeSlides";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import BrandSlides from "./layout/BrandSlides";
import ProductSlides from "./layout/ProductSlides";

const Home = () => {
  return (
    <DefaultHomeLayout>
      <div>
        <div className="flex mt-20 w-[1280px] h-[42vh] mx-auto">
          <div className="w-[40%] my-auto">
            <div className="flex flex-col space-y-2">
              <div className="flex h-[20vh]">
                <div className="w-[48%] rounded-md overflow-hidden mr-[2%]">
                  <img
                    className="h-full w-full object-cover"
                    src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697504590/wbo1lqs9kb3vrk4akewe.png"
                    alt="laptop"
                  />
                </div>
                <div className="w-[48%] rounded-md overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697504477/ytrpkijxx3zzihx90juu.png"
                    alt="smartphone"
                  />
                </div>
              </div>
              <div className="flex h-[20vh]">
                <div className="w-[48%] rounded-md overflow-hidden mr-[2%]">
                  <img
                    className="h-full w-full object-cover"
                    src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697504529/ddromajk7ussruf8gfir.png"
                    alt="smartwatch"
                  />
                </div>
                <div className="w-[48%] rounded-md overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697504556/wyw0qbfoybrvq1vdqvms.png"
                    alt="tablet"
                  />
                </div>
              </div>
            </div>
          </div>
          <HomeSlides />
        </div>
        <div className="w-[1280px] mx-auto">
          <BrandSlides />
          <ProductSlides />
        </div>
        <div className="w-[1280px] mx-auto my-10 rounded-sm overflow-hidden">
          <video
            controlsList="nodownload"
            muted
            playsInline
            autoPlay
            loop
            style={{ width: "100%", height: "100%" }}
            src="https://res.cloudinary.com/dttlhvsas/video/upload/v1697596707/VideoWeb_knvvzp.mp4"
          ></video>
        </div>
        <div className="w-[1280px] mx-auto my-10 flex items-center justify-around">
          <div className="w-[20%]  text-center">
            <img
              className="h-[15rem]"
              src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697604661/1_tizkvx.png"
              alt=""
            />
            <span className="text-2xl font-semibold text-center">
              Free ship
            </span>
            <p>
              Fast delivery nationwide within 3 days. Free shipping for orders
              over $300
            </p>
          </div>
          <div className="w-[20%]  text-center">
            <img
              className="h-[15rem]"
              src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697604661/3_oge4ap.png"
              alt=""
            />
            <span className="text-2xl font-semibold text-center">
              Good price
            </span>
            <p>
              There are many special incentives for new customers and long-time
              customers
            </p>
          </div>
          <div className="w-[20%]  text-center">
            <img
              className="h-[15rem]"
              src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697604661/2_vfgldf.png"
              alt=""
            />
            <span className="text-2xl font-semibold text-center">Genuine</span>
            <p>
              Genuine product, guaranteed to return and refund if the product
              has a manufacturer defect.
            </p>
          </div>
        </div>
      </div>
    </DefaultHomeLayout>
  );
};

export default Home;
