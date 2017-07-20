import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import qs from 'qs';

import db from './db';

import counterApp from '../reducers';
import App from '../containers/App';

export const handleRender = (req, res) => {
  const params = qs.parse(req.query);
  const counter = parseInt(params.counter, 10) || 0;
  let preloadedState = { counter };

  db.find("ToDo")
    .then(todos => {
      preloadedState.todos = todos;

      const store = createStore(counterApp, preloadedState);

      // Render the component to a string
      const html =
        renderToString(
          <Provider store={store}>
            <App />
          </Provider>
        );

      const finalState = store.getState();
      res.send(renderFullPage(html, finalState));
    });

};

const renderFullPage = (html, preloadedState) => {
  const stringifiedState = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${stringifiedState}
        </script>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
    `;
};
