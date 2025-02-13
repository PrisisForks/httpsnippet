OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("multipart/form-data; boundary=---011000010111000001101001");
RequestBody body = RequestBody.create(mediaType, "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"; filename=\"hello.txt\"\r\nContent-Type: text/plain\r\n\r\nHello World\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"bar\"\r\n\r\nBonjour le monde\r\n-----011000010111000001101001--\r\n");
Request request = new Request.Builder()
  .url("https://httpbin.org/anything")
  .post(body)
  .addHeader("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  .build();

Response response = client.newCall(request).execute();