const http = require('https');

const options = {
  method: 'POST',
  hostname: 'httpbin.org',
  port: null,
  path: '/anything',
  headers: {
    'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write('-----011000010111000001101001\r\nContent-Disposition: form-data; name="foo"; filename="hello.txt"\r\nContent-Type: text/plain\r\n\r\n\r\n-----011000010111000001101001--\r\n');
req.end();