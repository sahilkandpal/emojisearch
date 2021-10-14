import React from "react";
import { shallow } from "enzyme";
import Toast from "./Toast";
import { useToastContext } from "../../context/toastContext";

jest.mock("../../context/toastContext");

describe("Given Input", () => {
  beforeEach(() => {
    useToastContext.mockReturnValue({
      toast: { message: "", isVisible: false },
    });
  });

  test("Toast should visible on isVisible true", () => {
    useToastContext.mockReturnValue({
      toast: { message: "😢 copied!", isVisible: true },
    });
    const component = shallow(<Toast />);
    expect(component.props().isVisible).toEqual(true);
    expect(component).toMatchSnapshot();
  });

  test("Toast shouldn't be visible on isVisible false", () => {
    useToastContext.mockReturnValue({
      toast: { message: "", isVisible: false },
    });
    const component = shallow(<Toast />);
    expect(component.props().isVisible).toEqual(false);
    expect(component).toMatchSnapshot();
  });
});
