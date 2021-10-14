import { createContext, useState, useContext } from "react";

const initialState = { message: "", isVisible: false };

export const toastContext = createContext({
  toast: initialState,
  handleToast: () => {},
});

export const ToastContextProvider = ({ children }) => {
  const [toast, setToast] = useState(initialState);

  const handleToast = (message) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast({ message, isVisible: false });
    }, 1000);
  };

  return (
    <toastContext.Provider value={{ toast, handleToast }}>
      {children}
    </toastContext.Provider>
  );
};

export const useToastContext = () => {
  const { toast, handleToast } = useContext(toastContext);
  return {
    toast,
    handleToast,
  };
};
