var Generator = function () {
  this.id = 0;
};

Generator.prototype = {
  create: function () {
    return new Generator();
  },
  next: function () {
    return this.id++;
  }
};

module.exports = new Generator();
