'use strict';

var rule = require('../../../lib/rules/coverage');
var RuleTester = require('eslint').RuleTester;

var parserOptions = {};
var settings = {};

var tester = new RuleTester();

tester.run('coverage', rule, {

  valid: [
    // 50% ≥ 10%
    {
      code: '// test\nvar i = 0;'
    },
    // 50% ≥ 50%
    {
      code: '// test\nvar i = 0;',
      options: [ 50 ]
    },
    // Test blank lines are ignored.  50% ≥ 50%
    {
      code: '//test\n\nvar i = 0;',
      options: [ 50 ]
    }
  ],

  invalid: [
    {
      code: 'var i = 0;',
      errors: [{
        message: 'Only 0% of lines in this file are comments but the minimum is 10%.'
      }]
    },
    {
      code: 'var i = 0;',
      options: [ 50 ],
      errors: [{
        message: 'Only 0% of lines in this file are comments but the minimum is 50%.'
      }]
    },
    {
      code: '// test\nvar i = 0;',
      options: [ 60 ],
      errors: [{
        message: 'Only 50% of lines in this file are comments but the minimum is 60%.'
      }]
    }
  ]
});
