import React, { useEffect } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../redux/category/Action";
import ProductList from "./components/ProductList";
import { searchProductByCategoryAction } from "../../redux/product/Action";
import ProductSlides from "./layout/ProductSlides";

const Categories = () => {
  const allCategory = useSelector((store) => store.category.allCategory);
  const searchProductByCategory = useSelector(
    (store) => store.product.searchProductByCategory
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [dispatch]);
  useEffect(() => {
    if (allCategory.length > 0) {
      const firstCategoryName = allCategory[0].name;
      dispatch(searchProductByCategoryAction(firstCategoryName));
    }
    // eslint-disable-next-line
  }, [allCategory]);

  const handleFindProduct = (categoryName) => {
    dispatch(searchProductByCategoryAction(categoryName));
  };
  return (
    <DefaultHomeLayout
      children={
        <div className="mt-20 mb-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <div className="flex flex-col">
                {allCategory?.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleFindProduct(category.name)}
                    className="py-3 hover:bg-gray-200 cursor-pointer"
                  >
                    <span className="text-lg font-medium ml-3 uppercase">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-4">
              <ProductList listProduct={searchProductByCategory} />
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

export default Categories;
