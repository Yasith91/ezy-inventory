import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const ItemCard = ({ title, content, onAction }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onAction}>
            <CloseIcon />
          </IconButton>
        }
        title={title}
      />
      {/* We Pass card content here */}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  content: PropTypes.any,
};

ItemCard.defaultProps = {
  title: "",
  content: "",
};

export default ItemCard;
