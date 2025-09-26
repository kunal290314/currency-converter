import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { convertAmount } from '../../src/utils/convert.js';

Given('rates data:', function (docString) {
  this.ctx.rates = JSON.parse(docString);
});

Given('I have amount {int}', function (n) {
  this.ctx.amount = n;
});

Given('I have amount {string}', function (s) {
  this.ctx.amount = s; // to test invalid amount
});

Given('I choose from {string} to {string}', function (from, to) {
  this.ctx.from = from;
  this.ctx.to = to;
});

When('I convert', function () {
  this.ctx.error = null;
  try {
    this.ctx.result = convertAmount(this.ctx.amount, this.ctx.from, this.ctx.to, this.ctx.rates);
  } catch (e) {
    this.ctx.error = e;
  }
});

Then('the raw result should be {int}', function (expected) {
  assert.strictEqual(this.ctx.result, expected);
});

Then('it should throw {string}', function (msg) {
  assert.ok(this.ctx.error, 'Expected an error but none thrown');
  assert.strictEqual(this.ctx.error.message, msg);
});
