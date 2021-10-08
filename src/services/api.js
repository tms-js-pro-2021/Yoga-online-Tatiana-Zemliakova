export const api = {
  yogaEvents: 'https://tms-js-pro-back-end.herokuapp.com/api/yoga-events',
  yogaTeahers: 'https://tms-js-pro-back-end.herokuapp.com/api/yoga-teachers',
};

export const fetchUtil = (apiUrl, method, body = {}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('auth-token'),
    },
  };

  if (method === 'POST') {
    options.body === body;
  }
  return fetch(apiUrl, options);
};
