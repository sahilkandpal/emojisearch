import React from "react";
import { shallow } from "enzyme";
import EmojiList from "./EmojiList";
import { useEmojiContext } from "../../context/emojiContext";

jest.mock("../../context/emojiContext");

describe("Given EmojiList", () => {
  beforeEach(() => {
    useEmojiContext.mockReturnValue({
      emojiData: {},
      loading: false,
    });
  });
  test("when loading is true component should render loading text", () => {
    useEmojiContext.mockReturnValue({
      emojiData: {},
      loading: true,
    });
    const component = shallow(<EmojiList />);
    expect(component).toMatchSnapshot();
  });
  test("when result is not found component should render no result", () => {
    useEmojiContext.mockReturnValue({
      emojiData: {},
      loading: false,
    });
    const component = shallow(<EmojiList />);
    expect(component).toMatchSnapshot();
  });
  test("when result is found component should render emojilist", () => {
    useEmojiContext.mockReturnValue({
      emojiData: {
        "😀": ["grinning_face", "face", "smile", "happy", "joy", ":D", "grin"],
      },
      loading: false,
    });
    const component = shallow(<EmojiList />);
    expect(component).toMatchSnapshot();
  });
});
