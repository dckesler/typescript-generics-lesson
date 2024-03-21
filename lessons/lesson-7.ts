// Generic defaults
type Base = {
  foo: string;
}

type StringExtended = Base & {
  bar: string;
}

type NumberExtended = Base & {
  bar: number;
}

type FooFunc<T extends Base = StringExtended> = (bar: T) => T;

export const foo: FooFunc = (bar) => bar;
export const foo2: FooFunc<NumberExtended> = (bar) => bar;

const thing = foo({ foo: 'Hello, world!', bar: 'Hello, world!' })
const thing2 = foo2({ foo: 'Hello, world!', bar: 42 })

const badThing = foo({ foo: 'Hello, world!', bar: 42 })
const badThing2 = foo2({ foo: 'Hello, world!', bar: 'Hello, world!' })
