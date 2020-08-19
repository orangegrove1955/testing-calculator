import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("App component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Calculator Component", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });

  it("should match snapshot render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
