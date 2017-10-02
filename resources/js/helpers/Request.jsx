import fetch from 'isomorphic-fetch';

function FetchProducts (url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET'
    }).then(response => {
      if (response.status >= 400) {
        reject({ 'message': 'Ocorreu um erro', response });
      }
      return response.json();
    }).then(response => {
      resolve({ message: 'Request feito com sucesso', response });
    });
  });
}

export { FetchProducts };
