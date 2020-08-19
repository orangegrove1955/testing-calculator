import React from "react";
import { shallow } from "enzyme";
import Display from "../Display/Display";

describe("Calculator component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Display displayValue={0} />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("correctly renders 0 value of displayValue", () => {
    wrapper.setProps({ displayValue: 0 });
    expect(wrapper.text()).toEqual("0");
  });

  it("correctly renders positive value of displayValue", () => {
    wrapper.setProps({ displayValue: 10 });
    expect(wrapper.text()).toEqual("10");
  });

  it("correctly renders negative value of displayValue", () => {
    wrapper.setProps({ displayValue: -10 });
    expect(wrapper.text()).toEqual("-10");
  });
});