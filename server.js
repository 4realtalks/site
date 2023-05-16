const liveServer = require("live-server");
const cors = require("cors");

const params = {
  port: 3000, // Change the port number if needed
  middleware: [cors()],
};

liveServer.start(params);
