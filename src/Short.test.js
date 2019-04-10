import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })
import React from "react"
import { shallow } from "enzyme"
import Short from "./Short"

test("class", () => {
  const subject = shallow(<Short announcement={{}} />)
  expect(subject.hasClass("short")).toBeTruthy()
})
