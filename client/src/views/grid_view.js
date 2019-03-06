const PubSub = require('../helpers/pub_sub.js');
const GameView = require('./view.js');
const View = require('./view.js');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

GridView.prototype.render = function (lists) {
  this.container.innerHTML = '';
  const view = new View(this.container);
  lists.forEach((item) => view.render(item));
};

module.exports = GridView;
