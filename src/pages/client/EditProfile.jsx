import React, { useEffect, useRef, useState } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../redux/user/Action";
import { uploadToCloudinary } from "../../config/UploadToCloudinary";
import { Alert, Snackbar } from "@mui/material";
import { getUserAction } from "../../redux/auth/Action";

const EditProfile = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const reqUser = useSelector((store) => store.auth.reqUser);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const [address, setAddress] = useState({
    postalCode: reqUser?.address?.postalCode || "",
    street: reqUser?.address?.street || "",
    city: reqUser?.address?.city || "",
    state: reqUser?.address?.state || "",
    country: reqUser?.address?.country || "",
  });

  const [userProfile, setUserProfile] = useState({
    fullName: reqUser?.fullName || "",
    email: reqUser?.email || "",
    phoneNumber: reqUser?.phoneNumber || "",
    imageUrl:
      reqUser?.imageUrl ||
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });

  useEffect(() => {
    if (reqUser) {
      setAddress({
        postalCode: reqUser?.address?.postalCode || "",
        street: reqUser?.address?.street || "",
        city: reqUser?.address?.city || "",
        state: reqUser?.address?.state || "",
        country: reqUser?.address?.country || "",
      });

      setUserProfile({
        fullName: reqUser?.fullName || "",
        email: reqUser?.email || "",
        phoneNumber: reqUser?.phoneNumber || "",
        imageUrl: reqUser?.imageUrl || userProfile.imageUrl,
      });
    }
    // eslint-disable-next-line
  }, [reqUser]);

  const handleInputChange = (e, field, stateToUpdate) => {
    stateToUpdate((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const fileInputRef = useRef(null);

  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpToCloudinary = async (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.type.startsWith("image/")) {
      const imageUrl = await uploadToCloudinary(selectedImage);
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        imageUrl,
      }));
    } else {
      alert("Please select an image");
    }
  };

  const handleSaveProfile = () => {
    const userData = {
      token: token,
      data: {
        ...userProfile,
        address: { ...address },
      },
    };
    dispatch(updateUserAction(userData)).then(() => {
      dispatch(getUserAction(token));
      setOpenSnackbar(true);
    });
  };

  return (
    <DefaultHomeLayout
      children={
        <div className="mt-20">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-center text-2xl font-bold text-gray-800 my-5">
              Update Profile
            </p>
            <div className="flex">
              <div className="w-[40%] min-h-[78vh] flex flex-col items-center mt-10">
                <img
                  className="rounded-full object-cover h-[350px] w-[350px] border"
                  src={userProfile.imageUrl}
                  alt=""
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageUpToCloudinary}
                />
                <button
                  onClick={handleAddImageClick}
                  className="bg-green-600 text-white w-[20%] py-1 rounded-md hover:bg-green-700 mt-5"
                >
                  Add Image
                </button>
              </div>
              <div className="w-[60%] px-10 mt-5">
                <div className="flex items-center my-1">
                  <h2 className="text-xl font-semibold w-[15%]">Name:</h2>
                  <input
                    className="border ml-3 rounded-md px-3 py-1 outline-none"
                    type="text"
                    value={userProfile.fullName}
                    onChange={(e) =>
                      handleInputChange(e, "fullName", setUserProfile)
                    }
                  />
                </div>
                <div className="flex items-center my-1">
                  <h2 className="text-xl font-semibold w-[15%]">Email:</h2>
                  <input
                    className="border ml-3 rounded-md px-3 py-1 outline-none"
                    type="email"
                    value={userProfile.email}
                    onChange={(e) =>
                      handleInputChange(e, "email", setUserProfile)
                    }
                  />
                </div>
                <div className="flex items-center my-1">
                  <h2 className="text-xl font-semibold w-[15%]">Phone:</h2>
                  <input
                    className="border ml-3 rounded-md px-3 py-1 outline-none"
                    type="text"
                    value={userProfile.phoneNumber}
                    onChange={(e) =>
                      handleInputChange(e, "phoneNumber", setUserProfile)
                    }
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold w-[15%]">Address:</h2>
                  <div className="ml-3">
                    <div className="flex items-center my-1">
                      <span className="w-[15%] block">Postal code :</span>
                      <input
                        className="border rounded-md px-3 py-1 outline-none"
                        type="text"
                        value={address.postalCode}
                        onChange={(e) =>
                          handleInputChange(e, "postalCode", setAddress)
                        }
                      />
                    </div>
                    <div className="flex items-center my-1">
                      <span className="w-[15%] block">Street :</span>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-1 outline-none"
                        value={address.street}
                        onChange={(e) =>
                          handleInputChange(e, "street", setAddress)
                        }
                      />
                    </div>
                    <div className="flex items-center my-1">
                      <span className="w-[15%] block">City :</span>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-1 outline-none"
                        value={address.city}
                        onChange={(e) =>
                          handleInputChange(e, "city", setAddress)
                        }
                      />
                    </div>
                    <div className="flex items-center my-1">
                      <span className="w-[15%] block">State :</span>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-1 outline-none"
                        value={address.state}
                        onChange={(e) =>
                          handleInputChange(e, "state", setAddress)
                        }
                      />
                    </div>
                    <div className="flex items-center my-1">
                      <span className="w-[15%] block">Country :</span>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-1 outline-none"
                        value={address.country}
                        onChange={(e) =>
                          handleInputChange(e, "country", setAddress)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center my-1 space-x-20 mt-20">
                  <button
                    onClick={handleSaveProfile}
                    className="bg-green-600 text-white w-[10vw] py-1 rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
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
              Update Profile successfully
            </Alert>
          </Snackbar>
        </div>
      }
    />
  );
};

export default EditProfile;
