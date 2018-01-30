/* global $ */
// There is a search box on a page that populates search results as a user types.
// Queries are intensive, so we don’t want to search on every keypress unless
// there is a reasonable pause.
// Use example.com as if it was a search endpoint, it doesn’t actually need to fetch results.
// Develop a solution using Javascript/HTML and deliver your answer using a jsfiddle link.
// The only library allowed is stock jQuery, not any of its extensions.
function debounce(func, wait) {
  let timeout;
  return function returnFunc(...args) {
    const context = this;
    const later = function later() {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const ourFunc = function ourFunc() {
  console.log('hihihi there');
};

$.keydown(ourFunc);
