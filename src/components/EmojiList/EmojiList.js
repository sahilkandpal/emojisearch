import React from "react";
import { StyledEmojiList } from "./EmojiList.styles";
import { useEmojiContext } from "../../context/emojiContext";
import { useToastContext } from "../../context/toastContext";
const EmojiList = ({ className }) => {
  const { emojiData, loading } = useEmojiContext();
  const { handleToast } = useToastContext();
  const copyValue = (e) => {
    const emoji = e.target.innerText;
    navigator.clipboard?.writeText(emoji);
    handleToast(`${emoji} copied !`);
  };
  const notFound = Object.keys(emojiData).length === 0;
  const emojis = !loading ? (
    !notFound ? (
      Object.keys(emojiData).map((emoji) => (
        <div className="emoji" key={emoji} onClick={copyValue}>
          {emoji}
        </div>
      ))
    ) : (
      <h1 className="notfound">
        <div className="notfound-emoji">😭</div>
        <div className="notfound-text">No Results</div>
      </h1>
    )
  ) : (
    <h1 className="loading">⏳</h1>
  );

  return <StyledEmojiList className={className}>{emojis}</StyledEmojiList>;
};

export default EmojiList;
