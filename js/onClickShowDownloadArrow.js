import detectBrowser from './detectBrowser.js';

const refs = {
  dowloadArrowTop: document.querySelector('.download-icon-top'),
  dowloadArrowBottom: document.querySelector('.download-icon'),
};

const browser = detectBrowser();

export default function onClickShowDownloadArrow() {
  if (browser === 'No browser detection') {
    return console.error('Please use Chrome, Edge or Firefox for download');
  }

  browser === 'chrome'
    ? refs.dowloadArrowBottom.classList.remove('visually-hidden')
    : refs.dowloadArrowTop.classList.remove('visually-hidden');
}
