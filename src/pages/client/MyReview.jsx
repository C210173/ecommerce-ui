import React, { useEffect, useState } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import ProductSlides from "./layout/ProductSlides";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReviewAction,
  getUserReviewAction,
} from "../../redux/review/Action";
import CartItem from "./components/CartItem";
import { FaTrashAlt } from "react-icons/fa";
import { Alert, Snackbar } from "@mui/material";
import ConfirmDeleteModal from "../admin/components/ConfirmDeleteModal";

const MyReview = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingReview, setDeletingReview] = useState(null);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userReview = useSelector((store) => store.review.userReview);
  useEffect(() => {
    if (token) dispatch(getUserReviewAction(token));
    // eslint-disable-next-line
  }, [token]);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const openDeleteModal = (review) => {
    setDeletingReview(review);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setDeletingReview(null);
    setIsDeleteModalOpen(false);
  };
  const handleDeleteReview = (id) => {
    dispatch(
      deleteReviewAction({
        token: token,
        reviewId: id,
      })
    ).then(() => {
      dispatch(getUserReviewAction(token));
    });
    setSuccessMessage("Delete review successfully!");
    setOpenSnackbar(true);
  };
  return (
    <DefaultHomeLayout>
      <div className="mt-20 mb-10">
        <div className="max-w-screen-xl mx-auto ">
          <p className="text-center text-2xl font-bold text-gray-800 my-5">
            Your Reviews
          </p>
          <div className="my-10 min-h-[80vh] overflow-hidden overflow-y-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Product
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    rating
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    title
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    comment
                  </th>
                  <th className="px-4 py-2 text-left text-sm uppercase truncate">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {userReview?.map((review) => (
                  <tr key={review.id}>
                    <td className="px-4 py-2 w-[25%]">
                      <CartItem
                        imgUrl={review?.product?.imageUrl[0]}
                        name={review?.product?.name}
                        brand={review?.product?.brand?.name}
                      />
                    </td>
                    <td className="px-4 py-2">{review?.rating}</td>
                    <td className="px-4 py-2">{review?.title}</td>
                    <td className="px-4 py-2">{review?.comment}</td>
                    <td className="px-4 py-2">
                      {review?.createdAt
                        ? format(
                            new Date(review?.createdAt),
                            "dd/MM/yyyy HH:mm"
                          )
                        : "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => openDeleteModal(review)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ProductSlides />
        </div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {successMessage}
          </Alert>
        </Snackbar>
        {isDeleteModalOpen && (
          <ConfirmDeleteModal
            children={deletingReview}
            onCancel={closeDeleteModal}
            onDelete={handleDeleteReview}
            message={"Are you sure you want to delete this review"}
          />
        )}
      </div>
    </DefaultHomeLayout>
  );
};

export default MyReview;
