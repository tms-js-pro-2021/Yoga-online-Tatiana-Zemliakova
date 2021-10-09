export const api = {
  yogaEvents: 'https://tms-js-pro-back-end.herokuapp.com/api/yoga-events',
  yogaTeahers: 'https://tms-js-pro-back-end.herokuapp.com/api/yoga-teachers',
};

export const fetchUtil = (apiUrl, method, body = {}) => {
  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${sessionStorage.getItem('auth-token')}`,
    },
  };

  if (method === 'POST') {
    body.startDateTime = new Date(body.startDateTime).getTime()
    body.endDateTime = new Date(body.endDateTime).getTime()
    options.body = JSON.stringify(body);
    console.log(body)
  }
  return fetch(apiUrl, options);
};
