echo '-----011000010111000001101001
Content-Disposition: form-data; name="foo"

bar
-----011000010111000001101001--
' |  \
  http POST https://httpbin.org/anything \
  Content-Type:'multipart/form-data; boundary=---011000010111000001101001'