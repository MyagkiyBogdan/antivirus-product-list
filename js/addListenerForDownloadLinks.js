import onClickShowDownloadArrow from './onClickShowDownloadArrow.js';

const addListenerForDownloadLinks = async () => {
  const downloadLinks = await document.querySelectorAll('.product-list__download');

  [...downloadLinks].forEach(downloadLink =>
    downloadLink.addEventListener('click', onClickShowDownloadArrow)
  );
};

export default addListenerForDownloadLinks;
