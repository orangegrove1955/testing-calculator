import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("Calculator component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
