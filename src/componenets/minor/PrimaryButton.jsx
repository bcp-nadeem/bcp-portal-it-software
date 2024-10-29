// PrimaryButton.jsx
import { Button } from "@mui/material";

const PrimaryButton = ({ color, variant, title, onClickHandler, className, size }) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClickHandler}
      size={size}
      className={`${className} button`}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
