import winston from "winston/lib/winston/config";

const logger = winston.createLogger({
  format: winston.format.json(),
  level: "debug",
  transports: [new winston.transports.Console()],
});

logger.info("Hello via Winston!");
logger.warn("This is a warning");
logger.error("This is an error");
