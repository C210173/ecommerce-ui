import React, { useEffect } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import CartItem from "./components/CartItem";
import {
  AiOutlineArrowRight,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCartAction,
  getCartAction,
  getProductsFromCartAction,
  updateCartItemAction,
} from "../../redux/cart/Action";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const productsFromCart = useSelector((store) => store.cart.productsFromCart);
  const cart = useSelector((store) => store.cart.cart);

  useEffect(() => {
    if (token) dispatch(getCartAction(token));
  }, [dispatch, token]);

  const increaseQuantity = (productId) => {
    const updatedCart = [...productsFromCart];
    const productToUpdate = updatedCart.find(
      (item) => item.product.id === productId
    );
    if (productToUpdate) {
      productToUpdate.quantity += 1;

      dispatch(
        updateCartItemAction({
          token: token,
          data: {
            productId: productId,
            quantity: productToUpdate.quantity,
          },
        })
      ).then(() => {
        dispatch(getProductsFromCartAction(token));
        dispatch(getCartAction(token));
      });
    }
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = [...productsFromCart];
    const productToUpdate = updatedCart.find(
      (item) => item.product.id === productId
    );
    if (productToUpdate) {
      if (productToUpdate.quantity > 1) {
        productToUpdate.quantity -= 1;
        dispatch(
          updateCartItemAction({
            token: token,
            data: {
              productId: productId,
              quantity: productToUpdate.quantity,
            },
          })
        ).then(() => {
          dispatch(getProductsFromCartAction(token));
          dispatch(getCartAction(token));
        });
      } else {
        dispatch(
          deleteItemFromCartAction({
            token: token,
            productId: productId,
          })
        ).then(() => {
          dispatch(getProductsFromCartAction(token));
          dispatch(getCartAction(token));
        });
      }
    }
  };

  return (
    <DefaultHomeLayout
      children={
        <div className="mt-20">
          <div className="max-w-screen-xl mx-auto min-h-[100vh]">
            <p className="text-center text-2xl font-bold text-gray-800 my-5">
              Your Cart
            </p>
            <div className="py-2 flex justify-between">
              <div className="w-[70%]">
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
                    {productsFromCart?.map((productItem) => (
                      <tr key={productItem?.product.id}>
                        <td className="px-4 py-2 text-left text-sm">
                          {productItem?.product && (
                            <CartItem
                              imgUrl={productItem?.product?.imageUrl[0]}
                              name={productItem?.product?.name}
                              brand={productItem?.product?.brand?.name}
                            />
                          )}
                        </td>
                        <td className="px-4 py-2 text-left text-sm">
                          {productItem?.product && productItem.product.price}
                        </td>
                        <td className="px-4 py-2 text-left text-sm">
                          <div className="flex">
                            <button
                              className="px-2 border"
                              onClick={() =>
                                decreaseQuantity(productItem?.product.id)
                              }
                            >
                              <AiOutlineMinus />
                            </button>
                            <p className="leading-8 border px-2 w-[2.5rem] text-center">
                              {productItem?.quantity}
                            </p>
                            <button
                              className="px-2 border"
                              onClick={() =>
                                increaseQuantity(productItem?.product.id)
                              }
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-left text-sm">
                          {(
                            productItem?.product?.price * productItem?.quantity
                          ).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-[30%] h-[40rem] bg-gradient-to-r from-[#BF2D2D] to-[#594C4C] rounded-md">
                <div className="mt-10">
                  <p className="text-white font-semibold text-2xl text-center">
                    Order Summary
                  </p>
                </div>
                <div className="mt-10 px-10">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white font-medium">
                      Subtotal
                    </span>
                    <span className="text-white">
                      ${cart?.totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg text-white font-medium">
                      Total Product
                    </span>
                    <span className="text-white">{cart?.totalItem}</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg text-white font-medium">
                      Shipping
                    </span>
                    <span className="text-white">free</span>
                  </div>
                  <div className="flex items-center text-green-600 mt-3">
                    <span className="">Add coupon code</span>
                    <AiOutlineArrowRight />
                  </div>
                  <div className="flex justify-between items-center mt-10 border-t py-3">
                    <span className="text-lg text-white font-medium">
                      Total
                    </span>
                    <span className="text-white">
                      ${cart?.totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-full h-[10rem]">
                    <button
                      onClick={() => navigate("/checkout")}
                      className="rounded-full border py-3 px-8 text-white bg-[#0097B2] hover:bg-[#296F72]"
                    >
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
