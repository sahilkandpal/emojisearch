import Header from "./Header";
import { shallow } from "enzyme";
describe("shallow Header", () => {
  it("heading should be rendered", () => {
    let wrapper = shallow(<Header />);
    expect(wrapper.text()).toEqual("🌈Em💣ji Search");
  });
});
