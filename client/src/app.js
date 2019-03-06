const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const listForm = document.querySelector('#bucket-list-form');
  const formView = new FormView(listForm);
  formView.bindEvents();

  const bucketList = new BucketList();
  bucketList.getData();
});
