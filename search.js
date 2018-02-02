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
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
function searchSuccessHandler(data) {
  const [dataList, length] = [data, data.length];
  let nums;
  for (let i = 0; i < 3; i += 1) {
    nums = Math.floor(Math.random() * length);
    const returnList = [dataList[nums]];
    $('.returndata').append('<p>' + returnList + '</p>');

    console.log(returnList);
  }
  // pretend it gave good stuff
  // create array of data and display it
  // make an array thats like 10 items long randomly select 3 of them and inject them into the page
  // clear the list on the page before displaying
}
// const Data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const sendSearch = function sendSearch(event) {
  const currentQuery = event.target.value;
  $.ajax(`https://www.example.com/?query=${currentQuery}`, { success: searchSuccessHandler });
};
const debouncedSendSearch = debounce(sendSearch, 1000);

$('#searchbox').keydown(debouncedSendSearch);
