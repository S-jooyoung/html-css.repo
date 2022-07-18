{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bitint, symvol, null, undefined
   * Object: function, array.....
   *  */

  // number
  const num: number = -6;

  //  string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined : 값이 있는지 없는지 모르는 상태
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null : 여기에는 값이 없는 상태
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hi");
  }
  let unusalbe: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  //objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}

console.log("hello");
