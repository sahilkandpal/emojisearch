import React from "react";
import { useToastContext } from "../../context/toastContext";
import { StyledToast } from "./Toast.styles";
const Toast = () => {
  const { toast } = useToastContext();
  return (
    <StyledToast isVisible={toast.isVisible}>
      <h4>{toast.message}</h4>
    </StyledToast>
  );
};

export default Toast;
