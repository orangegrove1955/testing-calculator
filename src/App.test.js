import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App component", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
