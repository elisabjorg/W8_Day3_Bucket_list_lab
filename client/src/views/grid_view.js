const PubSub = require('../helpers/pub_sub.js');
// const GameView = require('./view.js');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    console.log(evt.detail);
  });
};

module.exports = GridView;
