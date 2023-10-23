import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const AddressForm = ({ onAddressChange }) => {
  const [addressData, setAddressData] = useState({
    consigneeName: "",
    consigneePhone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
    if (onAddressChange) {
      onAddressChange(addressData);
    }
  };

  return (
    <div className="min-h-[380px]">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="consigneeName"
            name="consigneeName"
            label="Consignee name"
            fullWidth
            variant="standard"
            value={addressData.consigneeName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="consigneePhone"
            name="consigneePhone"
            label="Consignee phone"
            fullWidth
            variant="standard"
            value={addressData.consigneePhone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            variant="standard"
            value={addressData.street}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            value={addressData.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={addressData.state}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalCode"
            name="postalCode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={addressData.postalCode}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={addressData.country}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressForm;
