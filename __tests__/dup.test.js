import { createStore, dup, next } from '../src';

test('dup: array', () => {
  expect(dup([])).toEqual([]);
  expect(dup([1,2,3])).toEqual([1,2,3]);
  const orig = [4,5,6];
  const copy = dup(orig);
  expect(copy).toEqual(orig);
  copy.unshift(3);
  expect(orig).toEqual([4,5,6]);
  expect(copy).toEqual([3,4,5,6]);
});

test('dup: object', () => {
  expect(dup({})).toEqual({});
  expect(dup({a:1,b:2,c:3})).toEqual({a:1,b:2,c:3});
  const orig = {a:1,b:2,c:3};
  const copy = dup(orig);
  expect(copy).toEqual(orig);
  copy['d'] = 4;
  expect(orig).toEqual({a:1,b:2,c:3});
  expect(copy).toEqual({a:1,b:2,c:3,d:4});
});
