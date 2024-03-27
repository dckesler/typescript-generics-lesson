type FooFunc<T> = (bar: T) => T;

export const fooFunc: FooFunc<number> = (bar) => bar;
fooFunc(12)

export const fooFunc2: FooFunc<string> = (bar) => bar;
fooFunc2('Hello, world!')

export const badFoo: FooFunc = (bar: string) => bar;
