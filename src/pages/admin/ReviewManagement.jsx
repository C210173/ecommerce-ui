import React, { useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";
import { format } from "date-fns";
import { useSelector } from "react-redux";

const ReviewManagement = () => {
  const allReview = useSelector((store) => store.review.allReview);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(allReview.length / itemsPerPage);

  const paginateData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const displayedReviews = paginateData(allReview, currentPage);
  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh] p-5 relative">
          <div className="flex justify-around">
            <Header title={"Review Management"} subtitle={"List review"} />
          </div>
          <div className="shadow-md rounded-lg overflow-hidden mx-5 overflow-y-scroll max-h-[73vh]">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Comment
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Create date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {displayedReviews?.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-200">
                    <td className="px-6 py-4">{review.user.fullName}</td>
                    <td className="px-6 py-4">{review.product.name}</td>
                    <td className="px-6 py-4">{review.rating}</td>
                    <td className="px-6 py-4">{review.title}</td>
                    <td className="px-6 py-4">{review.comment}</td>
                    <td className="px-6 py-4">
                      {format(new Date(review.createdAt), "dd/MM/yyyy HH:mm")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex m-5 absolute bottom-5 right-5">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              } px-3 py-1 rounded-lg bg-gray-800 text-white`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`${
                  currentPage === index + 1 ? "bg-gray-600" : "bg-gray-800"
                } text-white px-3 py-1 rounded-lg mx-1 cursor-pointer`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              } px-3 py-1 rounded-lg bg-gray-800 text-white`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      }
    />
  );
};

export default ReviewManagement;
