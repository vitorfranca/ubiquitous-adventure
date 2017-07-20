import fetch from './fetch';
import { apiUrl } from '../config';

const baseUrl = apiUrl + '/ToDo';

const self = {
  list: () => {
    return fetch(baseUrl)
      .then(res => res.json());
  },

  create: (todo) => {
    return fetch(
      baseUrl,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          done: false,
          ...todo
        })
      }
    )
      .then(res => res.json());
  },

  update: (todo) => {
    const { _id, ...body } = todo;
    return fetch(
      `${baseUrl}/${_id}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  },

  delete: (id) => {
    return fetch(
      `${baseUrl}/${id}`,
      { method: 'DELETE' }
    );
  }
};

export default self;
