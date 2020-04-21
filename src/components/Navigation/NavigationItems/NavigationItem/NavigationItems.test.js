import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "../NavigationItems";
import NavigationItem from "./NavigationItem";

configure({ adapter: new Adapter() });

describe("NavigationItem test", () => {
  it("should only show orders navigation when user is logged in", () => {
    const component = shallow(<NavigationItems/>
    );

    expect(component.find(NavigationItem).tohaveLength(2));



  });
});

//arrange.
//act
//assert

// "shallow" renders component with all the content but the content isn't deeply rendered
// the nested components are only rendered as placeholders, the content of a component is not rendered
