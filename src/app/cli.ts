import config from "./config/config";
import ConsoleLogger from "./logging/console";
import { LogPriority } from "./logging/logger";
import { EvlClient, EvlEventNames } from "./net/evl-client";
import { EvlSocketConnection } from "./net/evl-connection";

console.log("Welcome to EvlDaemon.");

const port = config.port;
const ip = config.ip;
const password = config.password;

const logger = new ConsoleLogger(LogPriority.Debug);

const evlConnection = new EvlSocketConnection(ip, port, logger);
const evlClient = new EvlClient(evlConnection, password, logger);

evlClient.addListener(EvlEventNames.DisconnectedEvent, () => {
  logger.logInfo(`Disconnected from EVL device.`);
});
evlClient.connect();
