type FooFunc2 = <T>(bar: T) => T;

export const foo: FooFunc2 = (bar) => bar;

export const fooResult = foo(42);

export const fooResult2 = foo('Hello, world!');
