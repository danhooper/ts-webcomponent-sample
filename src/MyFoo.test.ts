import { MyFoo } from "./MyFoo";

describe("MyFoo", () => {
    it("should construct", () => {
      const myFoo = new MyFoo('foo', 28);

      expect(myFoo.name).toEqual('foo');
      expect(myFoo.age).toEqual(28);
    });
});
