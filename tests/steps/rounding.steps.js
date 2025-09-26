import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { roundTo } from '../../src/utils/convert.js';

Given('a numeric value {float}', function (v) {
  this.ctx.value = v;
});

When('I round it to {int} decimals', function (d) {
  this.ctx.rounded = roundTo(this.ctx.value, d);
});

Then('the rounded result should be {float}', function (out) {
  assert.strictEqual(this.ctx.rounded, out);
});
