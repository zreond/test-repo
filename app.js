// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end('Welcome to hompage');
//     }
//     if(req.url === '/about') {
//         res.end('here is our short history');
//     }

//     res.end(
//         `
//         <h1>Oops!</h1>
//         <p>We cant seem to find the page youre looking for</p>
//         <a href="/"> Go back<a>
//         `
//     )
// })

// server.listen(5000);


const _ = require('lodash');

const items = [1, [2, [3, [5]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);