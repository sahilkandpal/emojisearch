import { shallow } from "enzyme";
import App from "./App";
describe("App", () => {
  test("App should be rendered wihout breaking", () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
