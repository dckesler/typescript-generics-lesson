# Generics

Think of the types you define as functions
Most of the time, these type functions are static

```typescript
function staticExample() {
  return 1;
}

type StaticType = {
  foo: number;
}
```
With functions and types, sometimes you want the behavior to depend on how it's used

```typescript
function dynamicExample(arg) {
  return arg;
}

type DynamicType<T> = {
  foo: T;
}
```
