import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  // transports: [ new winston.transports.File({ filename: 'stdout.log' }) ]
});

export default logger;
