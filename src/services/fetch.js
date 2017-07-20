let _fetch;
if (typeof window === 'undefined') {
  _fetch = require('node-fetch');
}
else
  _fetch = window.fetch;

export default _fetch;
