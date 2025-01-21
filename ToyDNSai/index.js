import { log } from "console";
import { startUdpServer, useCache, useFallback, useZone } from "denamed";

startUdpServer(
  (query) => {
    console.log(query);
  },
  { port: 8000 }
);
