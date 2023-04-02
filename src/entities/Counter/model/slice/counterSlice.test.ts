import {counterReducer, CounterSchema} from "entities/Counter";
import {counterActions} from "entities/Counter/model/slice/counterSlice";

describe('counterSlice.test', () => {
    test('decrement', () => {
        const counterState: CounterSchema = { value: 10 };
        expect(counterReducer(counterState, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('increment', () => {
        const counterState: CounterSchema = { value: 10 };
        expect(counterReducer(counterState, counterActions.increment)).toEqual({ value: 11 });
    });
    test('Should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});