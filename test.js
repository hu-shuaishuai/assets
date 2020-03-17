export function iosStatistics(obj) {
  const objStr = JSON.stringify(obj);
  window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.reportEvent.postMessage(objStr);
}
