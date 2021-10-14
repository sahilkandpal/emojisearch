import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";
import { useEmojiContext } from "../../context/emojiContext";

jest.mock("../../context/emojiContext");

jest.useFakeTimers("modern");
describe("Given Input", () => {
  let filterEmojiDataMock = jest.fn();
  let handleEmojiDataMock = jest.fn();
  let handleLoadingMock = jest.fn();

  beforeEach(() => {
    useEmojiContext.mockReturnValue({
      filterEmojiData: filterEmojiDataMock,
      handleEmojiData: handleEmojiDataMock,
      handleLoading: handleLoadingMock,
    });
  });

  test("Search bar should render properly", () => {
    const component = shallow(<SearchBar />);
    expect(component).toMatchSnapshot();
  });

  test("should render an input tag", () => {
    const component = shallow(<SearchBar />);
    expect(component.find("[data-testid='search-input']").exists()).toBe(true);
  });

  test("should render an cross icon", () => {
    const component = shallow(<SearchBar />);
    expect(component.find("[data-testid='cross-icon']").exists()).toBe(true);
  });

  test("input should update value on change and set loading true", () => {
    const component = shallow(<SearchBar />);
    let input = component.find("[data-testid='search-input']");
    input.simulate("change", { target: { value: "hot" } });
    input = component.find("[data-testid='search-input']");
    expect(input.props().value).toEqual("hot");
    expect(handleLoadingMock).toHaveBeenCalledWith(true);
    jest.runAllTimers();
  });
  test("input value on change should call some functions after 500ms", () => {
    const component = shallow(<SearchBar />);
    let input = component.find("[data-testid='search-input']");
    input.simulate("change", { target: { value: "face" } });
    input = component.find("[data-testid='search-input']");
    expect(input.props().value).toEqual("face");
    setTimeout(() => {
      expect(filterEmojiDataMock).toHaveBeenCalledWith("face");
      expect(filterEmojiDataMock).toHaveBeenCalledTimes(1);
      expect(handleEmojiDataMock).toHaveBeenCalledTimes(1);
      expect(handleLoadingMock).toHaveBeenNthCalledWith(2, false);
      expect(handleLoadingMock).toHaveBeenCalledTimes(2);
    }, 500);

    jest.runAllTimers();
  });

  test("should clear input value on clear", () => {
    const component = shallow(<SearchBar />);
    let input = component.find("[data-testid='search-input']");
    input.simulate("change", { target: { value: "happy" } });
    let crossIcon = component.find("[data-testid='cross-icon']");
    crossIcon.simulate("click");
    input = component.find("[data-testid='search-input']");
    expect(input.props().value).toEqual("");

    jest.runAllTimers();
  });

  test("input value on clear should call some functions after 500ms", () => {
    const component = shallow(<SearchBar />);
    let input = component.find("[data-testid='search-input']");
    input.simulate("change", { target: { value: "" } });
    input = component.find("[data-testid='search-input']");
    expect(input.props().value).toEqual("");
    setTimeout(() => {
      expect(filterEmojiDataMock).toHaveBeenCalledWith("");
      expect(filterEmojiDataMock).toHaveBeenCalledTimes(1);
      expect(handleEmojiDataMock).toHaveBeenCalledTimes(1);
      expect(handleLoadingMock).toHaveBeenNthCalledWith(2, false);
      expect(handleLoadingMock).toHaveBeenCalledTimes(2);
    }, 500);

    jest.runAllTimers();
  });
});
