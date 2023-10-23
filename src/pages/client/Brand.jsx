import React, { useEffect } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrandAction } from "../../redux/brand/Action";
import { searchProductByBrandAction } from "../../redux/product/Action";
import ProductSlides from "./layout/ProductSlides";
import ProductList from "./components/ProductList";

const Brand = () => {
  const dispatch = useDispatch();
  const allBrand = useSelector((store) => store.brand.allBrand);
  const searchProductByBrand = useSelector(
    (store) => store.product.searchProductByBrand
  );
  useEffect(() => {
    dispatch(getAllBrandAction());
  }, [dispatch]);
  useEffect(() => {
    if (allBrand.length > 0) {
      const firstBrandName = allBrand[0].name;
      dispatch(searchProductByBrandAction(firstBrandName));
    }
    // eslint-disable-next-line
  }, [allBrand]);

  const handleFindProduct = (brandName) => {
    dispatch(searchProductByBrandAction(brandName));
  };
  return (
    <DefaultHomeLayout
      children={
        <div className="mt-20 mb-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <div className="flex flex-col">
                {allBrand?.map((brand) => (
                  <div
                    key={brand.id}
                    onClick={() => handleFindProduct(brand.name)}
                    className="py-3 flex items-center hover:bg-gray-200 cursor-pointer"
                  >
                    <img
                      className="h-12 w-16 object-cover rounded-md shadow-sm ml-3"
                      src={brand.imageUrl}
                      alt=""
                    />
                    <span className="text-lg font-medium ml-3 uppercase">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-4">
              <ProductList listProduct={searchProductByBrand} />
            </div>
          </div>
          <div className="w-[1280px] mx-auto mt-20">
            <ProductSlides />
          </div>
        </div>
      }
    />
  );
};

export default Brand;
