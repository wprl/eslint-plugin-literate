var util = require('util');

module.exports = function (context) {
  var identity = function (a) { return a };
  var minimum = context.options[0] || 10;
  var source = context.getSourceCode();

  var comments = source.getAllComments();
  var lines = source.lines.filter(identity);

  var coverage = Math.floor(comments.length / lines.length * 100);

  return {
    'Program:exit': function (node) {
      if (coverage >= minimum) return;

      var message = util.format('Only %s%% of lines in this file are comments but the minimum is %s%%.', coverage, minimum);

      context.report({ node: node, message: message });
    }
  };

};

module.exports.schema = [{
  maximum: 100,
  minimum: 0,
  multipleOf: 1.0,
  type: 'number'
}];
