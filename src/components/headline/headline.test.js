import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import checkPropTypes from "check-prop-types";
import { checkProps } from "../../../Utils";

import { findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@gmail.com",
            age: 23,
            onlineStatus: false
          }
        ]
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test",
        desc: "Test Desc"
      };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a desc", () => {
      const h1 = findByTestAttr(wrapper, "desc");
      expect(h1.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
