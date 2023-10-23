import { format } from "date-fns";
import React from "react";
import { ImCancelCircle } from "react-icons/im";

const OrderDetailModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="bg-white p-4 rounded-lg z-10 w-[50vw] h-[50vh] relative">
        <h2 className="text-lg text-center font-bold">Order details</h2>
        <div className="flex items-center mt-5">
          <span className="font-semibold">Code</span>
          <p className="ml-3 text-gray-800">{order.id}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">User Order</span>
          <p className="ml-3 text-gray-800">{order.userOrder.fullName}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Shipping address</span>
          <p className="ml-3 text-gray-800">
            {order.shippingAddress.postalCode} : {order.shippingAddress.street},{" "}
            {order.shippingAddress.city}, {order.shippingAddress.state},{" "}
            {order.shippingAddress.country}
          </p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Consignee name</span>
          <p className="ml-3 text-gray-800">{order.consigneeName}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Consignee phone</span>
          <p className="ml-3 text-gray-800">{order.consigneePhone}</p>
        </div>
        <div className="overflow-auto max-h-[14vh] mt-2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-700 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 bg-gray-700 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 bg-gray-700 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-200">
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td className="text-gray-800 px-6 py-2">
                    {item.product.name}
                  </td>
                  <td className="text-gray-800 px-6 py-2">{item.quantity}</td>
                  <td className="text-gray-800 px-6 py-2">
                    ${item.product.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center mt-1">
          <span className="font-semibold">Total product</span>
          <p className="ml-3 text-gray-800">{order.totalItem}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Total price</span>
          <p className="ml-3 text-gray-800">{order.totalPrice}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Order date</span>
          <p className="ml-3 text-gray-800">
            {format(new Date(order.orderDate), "dd/MM/yyyy HH:mm")}
          </p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Status</span>
          <p className="ml-3 text-gray-800">{order.status}</p>
        </div>

        <button className="p-1 absolute top-3 right-3" onClick={onClose}>
          <ImCancelCircle />
        </button>
      </div>
    </div>
  );
};

export default OrderDetailModal;
