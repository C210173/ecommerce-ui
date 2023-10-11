import React, { useState, useEffect } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import CartItem from "./components/CartItem";
import { cartList } from "../../dummydata/DummyData";
import {
  AiOutlineArrowRight,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const Cart = () => {
  const [productQuantities, setProductQuantities] = useState({});

  // Cập nhật productQuantities ban đầu từ cartList
  useEffect(() => {
    const initialQuantities = {};
    cartList.forEach((item) => {
      initialQuantities[item.product.id] = item.quantity;
    });
    setProductQuantities(initialQuantities);
  }, []);

  const increaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) - 1;
      if (newQuantity >= 1) {
        return {
          ...prevQuantities,
          [productId]: newQuantity,
        };
      } else {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[productId];
        return updatedQuantities;
      }
    });
  };

  return (
    <DefaultHomeLayout
      children={
        <div className="mt-20">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-center text-2xl font-bold text-gray-800 my-5">
              Your Cart
            </p>
            <div className="py-2 flex justify-between">
              <div className="w-[70%] min-h-[31.7rem]">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-sm uppercase">
                        Product
                      </th>
                      <th className="px-4 py-2 text-left text-sm uppercase">
                        Price
                      </th>
                      <th className="px-4 py-2 text-left text-sm uppercase">
                        Quantity
                      </th>
                      <th className="px-4 py-2 text-left text-sm uppercase">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-left text-sm">
                          <CartItem
                            imgUrl={item.product.imageUrl}
                            name={item.product.name}
                            brand={item.product.brand}
                          />
                        </td>
                        <td className="px-4 py-2 text-left text-sm">
                          {item.product.price}
                        </td>
                        <td className="px-4 py-2 text-left text-sm">
                          <div className="flex">
                            <button
                              className="px-2 border"
                              onClick={() => decreaseQuantity(item.product.id)}
                            >
                              <AiOutlineMinus />
                            </button>
                            <p className="leading-8 border px-2 w-[2.5rem] text-center">
                              {productQuantities[item.product.id] || 0}
                            </p>
                            <button
                              className="px-2 border"
                              onClick={() => increaseQuantity(item.product.id)}
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-left text-sm">
                          {(
                            item.product.price *
                            (productQuantities[item.product.id] || 0)
                          ).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-[30%] h-[31.7rem] bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-md">
                <div className="mt-10">
                  <p className="text-gray-900 font-semibold text-2xl text-center">
                    Order Summary
                  </p>
                </div>
                <div className="mt-10 px-10">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-800 font-medium">
                      Subtotal
                    </span>
                    <span className="text-gray-600">$1000</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg text-gray-800 font-medium">
                      Shipping
                    </span>
                    <span className="text-gray-600">free</span>
                  </div>
                  <div className="flex items-center text-green-600 mt-3">
                    <span className="">Add coupon code</span>
                    <AiOutlineArrowRight />
                  </div>
                  <div className="flex justify-between items-center mt-10 border-t py-3">
                    <span className="text-lg text-gray-800 font-medium">
                      Total
                    </span>
                    <span className="text-gray-600">$1000</span>
                  </div>
                  <div className="flex items-center justify-center w-full h-[10rem]">
                    <button className="rounded-full border py-3 px-8 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l">
                      Check out
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

export default Cart;
