import createMurkupFromData from './createMurkupFromData.js';
import addListenerForDownloadLinks from './addListenerForDownloadLinks.js';

const refs = {
  productList: document.querySelector('.product-list'),
};

createMurkupFromData()
  .then(markup => refs.productList.insertAdjacentHTML('afterbegin', markup))
  .then(res => addListenerForDownloadLinks())
  .catch(err => console.log(err));
