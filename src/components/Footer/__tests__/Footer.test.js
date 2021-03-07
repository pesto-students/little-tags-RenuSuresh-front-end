import { fireEvent, render, cleanup } from "@testing-library/react";
import React from "react";
import Enzyme from "enzyme";
import renderer from "react-test-renderer";
import Footer from "../index";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import QuickLinks from "../QuickLinks";
import lang_en from "../../../locales/en/common.json";
import lang_hi from "../../../locales/hi/common.json";

Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe("<Footer />", () => {
  it("should render snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
