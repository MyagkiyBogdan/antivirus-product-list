import fetchProducts from './fetchProducts.js';

const BASE_URL = 'https://veryfast.io/t/front_test_api.php';

const createMurkupFromData = async (url = BASE_URL) => {
  try {
    const data = await fetchProducts(url);
    const products = data.result.elements;

    const markup = products
      .map(
        ({
          amount,
          license_name,
          name_prod,
          is_best,
          price_key,
          link,
        }) => `<li class="product-list__item">
                <div class="product-list__price">
                  ${is_best ? '<div class="product-list__value">Best value</div>' : ''}
                  <p class="product-list__text">
                    <span class="product-list__amount">$ ${amount}</span>${
          license_name.includes('Monthly') ? '/MO' : '/per year'
        }
                  </p>
                  ${
                    price_key.includes('50%')
                      ? '<img src="./img/ribbon.png" alt="ribbon" class="product-list__price-ribbon" />'
                      : ''
                  }
                </div>
                <p class="product-list__offer-name">${name_prod}</p>
                <p class="product-list__license-name">${license_name}</p>
                <a
                  href=${link}
                  download="name"
                  class="product-list__download"
                  ><div class="product-list__download-label">DOWNLOAD</div>
                  <svg width="30" height="30">
                    <use
                      class="product-list__list__download-icon"
                      href="./img/Vector.svg#icon-download"
                    ></use></svg
                ></a>
              </li>`
      )
      .join('');

    return markup;
  } catch (error) {
    console.log(error);
  }
};

export default createMurkupFromData;
