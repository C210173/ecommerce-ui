import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import {
  MdAdminPanelSettings,
  MdOutlineAccountCircle,
  MdOutlineManageAccounts,
  MdOutlinePreview,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, logoutAction } from "../../../redux/auth/Action";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { BiLogOut } from "react-icons/bi";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { Alert, Snackbar } from "@mui/material";
import { getProductsFromCartAction } from "../../../redux/cart/Action";
import SearchResults from "../components/SearchResults";
import { searchProductByNameAction } from "../../../redux/product/Action";

const HomeNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const searchResultsRef = useRef(null);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reqUser = useSelector((store) => store.auth.reqUser);
  const productsFromCart = useSelector((store) => store.cart.productsFromCart);
  const searchProductByName = useSelector(
    (store) => store.product.searchProductByName
  );
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) dispatch(getUserAction(token));
    if (token) dispatch(getProductsFromCartAction(token));
    // eslint-disable-next-line
  }, [token]);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const handlePasswordChangeSuccess = () => {
    setOpenSnackbar(true);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showSearchResults = () => {
    setSearchResultsVisible(true);
  };

  const hideSearchResults = () => {
    setSearchResultsVisible(false);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    showSearchResults();
  };

  const delayedSearch = (value) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (value.trim() !== "") {
      setSearchTimeout(
        setTimeout(() => {
          dispatch(searchProductByNameAction(value));
        }, 1500)
      );
    } else {
      hideSearchResults();
    }
  };

  useEffect(() => {
    delayedSearch(searchQuery);
    // eslint-disable-next-line
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(e.target)
      ) {
        hideSearchResults();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="max-w-screen-xl mx-auto py-1 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-[50px] h-[50px]"
          src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697608194/H_ids24p.png"
          alt=""
        />
        <div className="relative" ref={searchResultsRef}>
          <input
            onChange={handleSearchQueryChange}
            type="text"
            placeholder="Search products..."
            className="border border-white placeholder-white bg-transparent text-white pl-10 pr-3 py-1 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2 text-white" />
          {searchResultsVisible && (
            <SearchResults results={searchProductByName} />
          )}
        </div>
      </div>
      <div className="space-x-4 w-[400px]">
        <Link
          to="/"
          className="text-lg text-white hover:text-gray-400 font-semibold uppercase"
        >
          Home
        </Link>
        <Link
          to="/categories"
          className="text-lg text-white hover:text-gray-400 font-semibold uppercase"
        >
          Categories
        </Link>
        <Link
          to="/brand"
          className="text-lg text-white hover:text-gray-400 font-semibold uppercase"
        >
          Brand
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Badge badgeContent={productsFromCart?.length || 0} color="success">
          <FaShoppingCart
            onClick={() => navigate("/cart")}
            className="text-white text-2xl cursor-pointer hover:text-gray-400"
          />
        </Badge>
        {reqUser ? (
          <>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={
                    reqUser?.imageUrl ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1,
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => navigate("/profile")}>
                <ListItemIcon>
                  <MdOutlineAccountCircle />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={() => navigate("/profile/update")}>
                <ListItemIcon>
                  <MdOutlineManageAccounts />
                </ListItemIcon>
                Update profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setIsChangePasswordModalOpen(true);
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <MdAdminPanelSettings />
                </ListItemIcon>
                Change password
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => navigate("/profile/order")}>
                <ListItemIcon>
                  <MdOutlineWorkHistory />
                </ListItemIcon>
                Order history
              </MenuItem>
              <MenuItem onClick={() => navigate("/profile/review")}>
                <ListItemIcon>
                  <MdOutlinePreview />
                </ListItemIcon>
                My review
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <BiLogOut />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Link
            to="/login"
            className="text-lg text-white hover:text-gray-900 font-semibold"
          >
            Login
          </Link>
        )}
      </div>
      {isChangePasswordModalOpen && (
        <ChangePasswordModal
          onClose={() => setIsChangePasswordModalOpen(false)}
          onPasswordChangeSuccess={handlePasswordChangeSuccess}
        />
      )}
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
          change password successfully
        </Alert>
      </Snackbar>
    </nav>
  );
};

export default HomeNavbar;
