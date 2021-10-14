import { createContext, useState, useContext } from "react";
import emojidata from "../json/emoji-en-US.json";
export const emojiContext = createContext({
  emojiData: {},
  filterEmojiData: () => {},
  handleEmojiData: () => {},
  loading: false,
  handleLoading: () => {},
});
const initialState = emojidata;

export const EmojiContextProvider = ({ children }) => {
  const [emojiData, setEmojiData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleLoading = (state) => {
    setLoading(state);
  };

  const handleEmojiData = (val) => {
    setEmojiData(val);
  };

  const filterEmojiData = (query) => {
    if (query.trim() !== "") {
      let newdata = {};
      Object.keys(emojidata).map((val) => {
        const filtered = emojidata[val].filter((value) =>
          value.toLowerCase().includes(query.trim().toLowerCase())
        );
        if (filtered.length > 0) {
          newdata = { ...newdata, [val]: emojidata[val] };
        }
        return null;
      });
      return newdata;
    } else {
      return emojidata;
    }
  };

  return (
    <emojiContext.Provider
      value={{
        emojiData,
        filterEmojiData,
        handleEmojiData,
        loading,
        handleLoading,
      }}
    >
      {children}
    </emojiContext.Provider>
  );
};

export const useEmojiContext = () => {
  const {
    emojiData,
    filterEmojiData,
    handleEmojiData,
    loading,
    handleLoading,
  } = useContext(emojiContext);
  return {
    emojiData,
    filterEmojiData,
    handleEmojiData,
    loading,
    handleLoading,
  };
};
