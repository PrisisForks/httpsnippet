echo '-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain


-----011000010111000001101001--
' |  \
  http POST https://httpbin.org/anything \
  content-type:'multipart/form-data; boundary=---011000010111000001101001'