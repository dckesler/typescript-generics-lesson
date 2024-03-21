type FooFunc<T> = (bar: T) => T;

export const foo: FooFunc<number> = (bar) => bar;

export const badFoo: FooFunc = (bar: string) => bar;
