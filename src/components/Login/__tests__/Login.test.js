import { fireEvent, render, cleanup } from "@testing-library/react";
import React from "react";
import Enzyme from "enzyme";
import renderer from "react-test-renderer";
import Login from "../index";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { facebookProvider, googleProvider } from "../../../config/authMethod";
import socialMediaAuth from "../../../service/auth";
Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe("<Login />", () => {
  it("should render the snapshot", () => {
    // const tree = renderer.create(<Login />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
