import React, { useState } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import AddressForm from "./components/AddressForm";
import PaymentForm from "./components/PaymentForm";
import ReviewOrder from "./components/ReviewOrder";
import { useDispatch, useSelector } from "react-redux";
import { createOrderAction } from "../../redux/order/Action";
import {
  clearCartAction,
  getCartAction,
  getProductsFromCartAction,
} from "../../redux/cart/Action";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const cart = useSelector((store) => store.cart.cart);
  const createOrder = useSelector((store) => store.order.createOrder);
  const steps = ["Shipping address", "Payment details", "Review your order"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressData, setAddressData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [orderCreated, setOrderCreated] = useState(false);

  const handleAddressChange = (data) => {
    setAddressData(data);
  };

  const handlePaymentChange = (data) => {
    setPaymentData(data);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm onAddressChange={handleAddressChange} />;
      case 1:
        return <PaymentForm onPaymentChange={handlePaymentChange} />;
      case 2:
        return <ReviewOrder cart={cart} />;
      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePlaceOrder = () => {
    const { postalCode, street, city, state, country } = addressData;
    const shippingAddress = { postalCode, street, city, state, country };
    const orderData = {
      token: token,
      data: {
        items: cart.items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
        consigneeName: addressData.consigneeName,
        consigneePhone: addressData.consigneePhone,
        paymentDetail: paymentData,
        shippingAddress: shippingAddress,
      },
    };
    dispatch(createOrderAction(orderData)).then(() => {
      dispatch(clearCartAction(token)).then(() => {
        dispatch(getProductsFromCartAction(token));
        dispatch(getCartAction(token));
        setOrderCreated(true);
      });
    });
  };
  return (
    <DefaultHomeLayout
      children={
        <div className="mt-14">
          <div className="max-w-screen-xl mx-auto">
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Typography component="h1" variant="h4" align="center">
                  Checkout
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {orderCreated ? (
                  <div className="min-h-[360px]">
                    <Typography variant="h5" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your order CODE is #{createOrder.id}. We have emailed your
                      order confirmation, and will send you an update when your
                      order has shipped.
                    </Typography>
                    <Button onClick={() => navigate("/")} variant="text">
                      Continue shopping
                    </Button>
                  </div>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        onClick={
                          activeStep === steps.length - 1
                            ? handlePlaceOrder
                            : handleNext
                        }
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </Paper>
            </Container>
          </div>
        </div>
      }
    />
  );
};

export default CheckOut;
