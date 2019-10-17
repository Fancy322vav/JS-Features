const url = 'https://jsonplaceholder.typicode.com/users';

function sendReq(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };

    // return Promise
    // fetch === 'GET' method
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(res => {
            return res.json();
    }).catch(err => console.log(err));
}

const body = {
    name: 'Alex',
    age: '22'
}

sendReq('POST', url, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
