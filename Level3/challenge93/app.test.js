const fs = require("fs");

jest.mock("fs"); 

test("mock fs.readFile to return hello", (done) => {
  fs.readFile.mockImplementation((path, encoding, callback) => {
    callback(null, "hello");
  });

  fs.readFile("dummy.txt", "utf8", (err, data) => {
    expect(data).toBe("hello");
    done();
  });
});
