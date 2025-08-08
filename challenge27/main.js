import { url, timeout, retryCount } from './config.js';

function fetchData() {
console.log("Fetching data from:", url);
console.log("Timeout set to:", timeout, "ms");
console.log("Retry attempts:", retryCount);
}

fetchData();
