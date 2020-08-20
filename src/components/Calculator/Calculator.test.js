import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

describe("Calculator component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should match Calculator snapshot render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a Display component", () => {
    // Mock value to pass into displayValue
    const displayMock = jest.fn();
    const displayValue = displayMock.mockReturnValueOnce(0);

    expect(
      wrapper.containsMatchingElement(<Display displayValue={displayValue()} />)
    ).toEqual(true);
  });

  it("should render a Keypad component", () => {
    // Mock values to pass to into Keypad
    const keypadMock = jest.fn();
    const keypadValues = keypadMock.mockReturnValueOnce();

    expect(wrapper.containsMatchingElement(<Keypad />)).toEqual(true);
  });
});
