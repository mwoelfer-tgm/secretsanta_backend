import { expect } from "chai"
import { test_function } from "..";

describe("This is a test", () => {
    it("further testing", () => {
        expect(test_function()).to.eql("test_string")
    })
})