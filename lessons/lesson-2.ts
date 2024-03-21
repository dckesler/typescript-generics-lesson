type FooGeneric<T> = {
  bar: T;
}

interface FooIGeneric<T> {
  bar: T;
}

export const foo: FooGeneric<number> = {
  bar: 42
};

export const fooI: FooIGeneric<number> = {
  bar: 42
};

export const badFoo: FooGeneric<string> = {
  bar: 42
};
