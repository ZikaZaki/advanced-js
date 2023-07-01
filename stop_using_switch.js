const extension = '/';
  // Switch statement
let contentType;
switch(extension) {
  case '.css':
    contentType = 'text/css';
    break;
  case '.js':
    contentType = 'text/javascript';
    break;
  case '.json':
    contentType = 'application/json';
    break;
  case '.jpg':
    contentType = 'image/jpeg';
    break;
  case '.png':
    contentType = 'image/png';
    break;
  case '.txt':
    contentType = 'text/plain';
    break;
  default:
    contentType = 'text/html';
}


// Switch statement can be replaced with object
const extensionObj = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.txt': 'text/plain'
}

console.log(extensionObj[extension] || 'text/html');


// you can also replace switch statement with Maps
const myMap = new Map();
myMap.set('.css', 'text/css');
myMap.set('.js', 'text/javascript');
myMap.set('.json', 'application/json');
myMap.set('.jpg', 'image/jpeg');
myMap.set('.png', 'image/png');
myMap.set('.txt', 'text/plain');

console.log(myMap.get(extension) || 'text/html');
