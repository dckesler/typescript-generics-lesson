type FooFunc2 = <T>(bar: T) => T;

export const fooFunc: FooFunc2 = (bar) => bar;

export const fooResult = fooFunc(42);

export const fooResult2 = fooFunc('Hello, world!');
