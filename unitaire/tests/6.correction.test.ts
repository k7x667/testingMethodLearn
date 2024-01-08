import { test, expect, vi, describe, beforeEach } from 'vitest';
import { Subject, Observer, ObserverImplementation } from '../6';

test('Test can add an observer', () => {
  const subject = new Subject();
  const observer = new ObserverImplementation('test');

  subject.addObserver(observer);
  const observers = subject.getObservers();

  expect(Array.isArray(observers)).toBeTruthy();
  expect(observers).toMatchSnapshot();
});

test('Test can add multiple observer', () => {
  const subject = new Subject();
  const observer = new ObserverImplementation('test');
  const observer2 = new ObserverImplementation('Test 2');

  subject.addObserver(observer);
  subject.addObserver(observer2);
  const observers = subject.getObservers();

  expect(Array.isArray(observers)).toBeTruthy();
  expect(observers).toMatchSnapshot();
});

test('Test can delete an observer when one', () => {
  const subject = new Subject();
  const observer = new ObserverImplementation('test');

  subject.addObserver(observer);
  subject.removeObserver(observer);
  const observers = subject.getObservers();

  expect(observers).toEqual([]);
});

test('Test can delete an observer when multiple', () => {
  const subject = new Subject();
  const observer = new ObserverImplementation('test');
  const observer2 = new ObserverImplementation('Test 2');

  subject.addObserver(observer);
  subject.addObserver(observer2);
  subject.removeObserver(observer);
  const observers = subject.getObservers();

  expect(observers).toMatchSnapshot();
});

test('Notify launch observer function', () => {
  const subject = new Subject();
  const observer = new ObserverImplementation('test');
  const spyObserver = vi.spyOn(observer, 'update');

  subject.addObserver(observer);
  subject.notify('hello world');

  expect(spyObserver).toHaveBeenCalledOnce();
});

test('Notify launch all observers function', () => {
  const subject = new Subject();
  const observer = new ObserverImplementation('test');
  const observer2 = new ObserverImplementation('tes2');

  const spyObserver = vi.spyOn(observer, 'update');
  const spyObserver2 = vi.spyOn(observer2, 'update');

  subject.addObserver(observer);
  subject.addObserver(observer2);
  subject.notify('hello world');

  expect(spyObserver).toHaveBeenCalledOnce();
  expect(spyObserver).toHaveBeenCalledWith('hello world');
  expect(spyObserver2).toHaveBeenCalledOnce();
  expect(spyObserver2).toHaveBeenCalledWith('hello world');
});
