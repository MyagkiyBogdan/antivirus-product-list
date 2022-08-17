export default function detectBrowser() {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/edg/i)) {
    browserName = 'edge';
  } else if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'chrome';
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'firefox';
  } else {
    browserName = 'No browser detection';
  }
  return browserName;
}
