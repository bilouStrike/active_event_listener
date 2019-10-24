var items = Array.prototype.slice.call(
  document.querySelectorAll('*')
).map(function(element) {
  var listeners = getEventListeners(element);
  return {
    element: element,
    listeners: Object.keys(listeners).map(function(k) {
      return { event: k, listeners: listeners[k] };
    })
  };
}).filter(function(item) {
  return item.listeners.length;
});
