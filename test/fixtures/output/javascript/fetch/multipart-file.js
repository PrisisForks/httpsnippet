const form = new FormData();
form.append("foo", "test/fixtures/files/hello.txt");

fetch("http://mockbin.com/har", {
  "method": "POST",
  "headers": {
    "content-type": "multipart/form-data; boundary=---011000010111000001101001"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
