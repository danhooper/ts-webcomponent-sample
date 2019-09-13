import { MyElement } from "./MyElement";

describe("MyElement", () => {
    it("should construct", () => {
      const myElement = new MyElement();
      expect(myElement).toBeDefined();
    });
});