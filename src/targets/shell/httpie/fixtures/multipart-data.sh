echo '-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain

Hello World
-----011000010111000001101001
Content-Disposition: form-data; name="bar"

Bonjour le monde
-----011000010111000001101001--
' |  \
  http POST https://httpbin.org/anything \
  content-type:'multipart/form-data; boundary=---011000010111000001101001'