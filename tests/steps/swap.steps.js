import { Given, When, Then } from "@cucumber/cucumber";
import assert from 'assert';
import { swapPair } from '../../src/utils/convert.js';

Given('I choose from {string} to {string}', function (from, to){
    this.ctx.from = from;
    this.ctx.to = to
})

When('I sawp the pair', function(){
    [this.ctx.from, this.ctx.to] = swapPair(this.ctx.from, this.ctx.to)
})

Then('the pair should be {string} and {string}', function(a,b){
assert.strictEqual(this.ctx.from,a)
assert.strictEqual(this.ctx.to,b)
})