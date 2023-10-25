import React, { useEffect } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderAction } from "../../redux/order/Action";
import CartItem from "./components/CartItem";
import ProductSlides from "./layout/ProductSlides";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userOrder = useSelector((store) => store.order.userOrder);
  useEffect(() => {
    if (token) dispatch(getUserOrderAction(token));
    // eslint-disable-next-line
  }, [token]);
  return (
    <DefaultHomeLayout>
      <div className="mt-20 mb-10">
        <div className="max-w-screen-xl mx-auto ">
          <p className="text-center text-2xl font-bold text-gray-800 my-5">
            Your Order History
          </p>
          <div className="mt-10 min-h-[80vh] overflow-hidden overflow-y-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Product
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Total Price
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Consignee Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Shipping Address
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Order Date
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Delivery Date
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {userOrder?.map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-2 w-[25%]">
                      {order?.items.map((product) => (
                        <CartItem
                          imgUrl={product?.product?.imageUrl[0]}
                          name={product?.product?.name}
                          brand={product?.product?.brand?.name}
                        />
                      ))}
                    </td>
                    <td className="px-4 py-2">{order?.totalPrice}</td>
                    <td className="px-4 py-2">{order?.consigneeName}</td>
                    <td className="px-4 py-2">
                      <p>
                        {order?.shippingAddress?.postalCode},{" "}
                        {order?.shippingAddress?.street},{" "}
                        {order?.shippingAddress?.city},
                        {order.shippingAddress?.state},{" "}
                        {order?.shippingAddress?.country}
                      </p>
                    </td>
                    <td className="px-4 py-2">
                      {order?.orderDate
                        ? format(new Date(order?.orderDate), "dd/MM/yyyy HH:mm")
                        : "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      {order?.deliveryDate
                        ? format(
                            new Date(order?.deliveryDate),
                            "dd/MM/yyyy HH:mm"
                          )
                        : "N/A"}
                    </td>
                    <td className="px-4 py-2">{order?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ProductSlides />
        </div>
      </div>
    </DefaultHomeLayout>
  );
};

export default OrderHistory;
