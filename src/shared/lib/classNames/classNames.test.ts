import { classNames } from "./classNames";

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });
  
  test('with additional classes and modes', () => {
    const expected = 'someClass class1 class2 hoverable scrolable';
    expect(classNames('someClass', {hoverable: true, scrolable: true}, ['class1', 'class2'])).toBe(expected);
  });
  
  test('with additional classes and one mode eq false', () => {
    const expected = 'someClass class1 class2 hoverable';
    expect(classNames('someClass', {hoverable: true, scrolable: false}, ['class1', 'class2'])).toBe(expected);
  });
  
  test('with additional classes and one mode eq undefined', () => {
    const expected = 'someClass class1 class2 hoverable';
    expect(classNames('someClass', {hoverable: true, scrolable: undefined}, ['class1', 'class2'])).toBe(expected);
  });
})