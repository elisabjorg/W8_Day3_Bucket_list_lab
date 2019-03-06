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

  const deleteButton = this.createDeleteButton(list._id);
  listContainer.appendChild(deleteButton);
};

View.prototype.createDeleteButton = function (itemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = itemId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('View:item-delete-clicked', evt.target.value);
  });

  return button;
};


module.exports = View;
