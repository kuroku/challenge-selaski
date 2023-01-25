import {expect, test} from '@jest/globals';
import { calculateProcessingTime } from '../src/index'

test('Ejemplo practico 1', () => {
  expect(calculateProcessingTime([0,1,2,3,4,5,6,7,8,9], '1297')).toBe('11ms')
})

test('Ejemplo practico 2', () => {
  expect(calculateProcessingTime([0,1,2,9,7,5,6,3,8,4], '1297')).toBe('4ms')
})

test('Ejemplo practico extra', () => {
  expect(calculateProcessingTime([0,9,8,7,6,5,1,2,3,4], '1297')).toBe('15ms')
})