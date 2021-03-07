import { fireEvent, render, cleanup } from "@testing-library/react";
import React from "react";
import Enzyme from "enzyme";
import renderer from "react-test-renderer";
import Search from "../Search";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

afterEach(cleanup);

describe("<Search />", () => {
  it("should render snapshot", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should have one input field", () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("should have empty input filed", () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find("input").props().value).toEqual("");
  });
  it("should not display suggestion on click/focus in search input", () => {
    const tree = mount(<Search />);
    tree.find("input").simulate("click");
    expect(tree).toMatchSnapshot();
  });
  it("should update input text", () => {
    const tree = mount(<Search />);
    tree.find("input").simulate("change", { target: { value: "jac" } });
    expect(tree.find("input").props().value).toEqual("jac");
  });
});
