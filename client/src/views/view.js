const PubSub = require('../helpers/pub_sub.js');

const View = function (container) {
  this.container = container;
};

View.prototype.render = function (list) {
  const listContainer = document.createElement('div');
  listContainer.id = 'list';

  const ulList = document.createElement('ul');
  const liList = document.createElement('li');
  liList.textContent = list.name;
  ulList.appendChild(liList);
  listContainer.appendChild(ulList);
  this.container.appendChild(listContainer);
};



module.exports = View;
