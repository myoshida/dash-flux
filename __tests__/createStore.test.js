import { createStore, dup, next } from '../src';

test('createStore: w/ initialState', () => {
  let s = createStore({
    initialState: { a: 1, b: 2 },
  });
  expect(s.getState()['a']).toBe(1);
  expect(s.getState()['b']).toBe(2);
});

test('createStore: w/ initialState & actions', () => {
  let s = createStore({
    initialState: { a: 1 },
    actions: {
      doit() {
        s.update(state => ({ a: 2 }));
      },
    },
  });
  s.dispatch('doit');
  expect(s.getState()['a']).toBe(2);
});
