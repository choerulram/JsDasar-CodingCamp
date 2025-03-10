import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// menguji penjumlahan dua angka positif
test('sum adds two positive numbers correctly', () => {
  assert.strictEqual(sum(2, 3), 5);
});

// menguji penjumlahan dengan angka nol
test('sum adds a number and zero', () => {
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 5), 5);
});

// menguji penjumlahan dengan argumen negatif
test('sum returns 0 when one or both arguments are negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

// menguji penjumlahan dengan argumen bukan angka
test('sum returns 0 when arguments are not numbers', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum('2', '3'), 0);
  assert.strictEqual(sum({}, 3), 0);
  assert.strictEqual(sum(2, {}), 0);
});

// menguji penjumlahan dengan argumen yang tidak valid
test('sum returns 0 when arguments are undefined', () => {
  assert.strictEqual(sum(undefined, 3), 0);
  assert.strictEqual(sum(2, undefined), 0);
  assert.strictEqual(sum(undefined, undefined), 0);
});