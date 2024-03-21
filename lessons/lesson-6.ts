type ActionMap = {
  increment: undefined;
  decrement: undefined;
  set: number;
  convert: string;
}

type Dispatch = <Type extends keyof ActionMap, Payload extends ActionMap[Type]>(
  type: Type,
  payload: Payload,
) => void;

const dispatch: Dispatch = (type, payload) => {
  console.log(type, payload);
};

dispatch('increment', undefined);
dispatch('set', 42);

