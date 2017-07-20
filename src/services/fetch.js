let _fetch;
if (typeof window === 'undefined') {
  console.log('is on node');
  _fetch = require('node-fetch');
}
else
  _fetch = window.fetch;

export default _fetch;
