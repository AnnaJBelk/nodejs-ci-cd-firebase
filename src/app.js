const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Only start server if not being imported for testing
if (require.main === module) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  module.exports = server;
} else {
  module.exports = app;
}
