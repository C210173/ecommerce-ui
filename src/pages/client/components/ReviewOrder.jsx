import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ReviewOrder = ({ cart }) => {
  return (
    <div className="min-h-[380px]">
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart?.items.map((item) => (
          <ListItem key={item?.product?.id} sx={{ py: 1, px: 0 }}>
            <img
              src={item?.product?.imageUrl[0]}
              alt=""
              className="h-10 w-10 object-cover mr-3"
            />
            <ListItemText
              primary={item?.product?.name + "　x" + item?.quantity}
            />

            <Typography variant="body2">
              {item?.product?.price * item?.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cart?.totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default ReviewOrder;
