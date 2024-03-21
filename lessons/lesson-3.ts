type FooExtends<T extends string> = {
  bar: T;
};

export const foo: FooExtends<string> = {
  bar: 'Hello, world!'
};

export const badFoo: FooExtends<number> = {
  bar: 42
};

const foo2: FooExtends<'buff'> = {
  bar: 'buff'
};

const badFoo2: FooExtends<'buff'> = {
  bar: 'Hello, world!'
};



type FooSpecific<T extends 'tree'> = {
  bar: T;
};

const fooSpecific: FooSpecific<'tree'> = {
  bar: 'tree'
};

const badFooSpecific: FooSpecific<'treeth'> = {
  bar: 'treeth'
};
