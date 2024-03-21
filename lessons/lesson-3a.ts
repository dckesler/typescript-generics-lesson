type StringThing = {
  bar: string;
};

type OtherThing = {
  oof: number | boolean;
}

type FooExtendsExtended<T> = {
  record: T extends string ? StringThing : OtherThing;
}

export const foo: FooExtendsExtended<string> = {
  record: {
    bar: 'Hello, world!'
  }
};

export const foo2: FooExtendsExtended<number> = {
  record: {
    oof: 42
  }
};
