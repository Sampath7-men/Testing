const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(
    "Deployment Test Successful!\n\n" +
    "Server is running on AWS EC2 - CI/CD Test\n" +
    "This is a simple Node.js app for manual deployment practice\n"
  );
});

const PORT = 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});