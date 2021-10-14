import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import EmojiList from "./components/EmojiList/EmojiList";
import Toast from "./components/Toast/Toast";
import { EmojiContextProvider } from "./context/emojiContext";
import { ToastContextProvider } from "./context/toastContext";
const App = () => {
  return (
    <div className="App">
      <Header />
      <EmojiContextProvider>
        <SearchBar />
        <ToastContextProvider>
          <EmojiList />
          <Toast />
        </ToastContextProvider>
      </EmojiContextProvider>
    </div>
  );
};

export default App;
