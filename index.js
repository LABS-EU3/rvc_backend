const server = require('./api/server');

const port = process.env.PORT || 6000;
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
