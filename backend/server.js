const app = require("./app");
const connectDatabase = require("./config/database");

const port = process.env.PORT || 8000;

connectDatabase();

const server = app.listen(port, () => {
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV} mode`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled rejection error");

  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception error");
  server.close(() => {
    process.exit(1);
  });
});
