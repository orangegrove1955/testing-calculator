import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Calculator from "./components/Calculator/Calculator";

describe("App component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should match App snapshot render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Calculator Component", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
