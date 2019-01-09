import { test_function } from "../src";
import { expect } from "chai"

describe("This is a test", () => {
    it("further testing", () => {
        expect(test_function()).to.eql("test_string")
    })
})