import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";

describe("Keypad component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Keypad />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
