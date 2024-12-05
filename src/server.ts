/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-undef */
import mongoose from 'mongoose';
import { Server as HTTPServer } from 'http'; // Import HTTPServer type
import server from './app';
import { errorLogger, logger } from './app/shared/logger';
import config from './app/config';
import seedSuperAdmin from './app/DB';

let myServer: HTTPServer | undefined;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('DB Connected Successfully');

    const port =
      typeof config.port === 'number' ? config.port : Number(config.port);
    myServer = server.listen(port, config.base_url as string, () => {
      logger.info(
        `Example app listening on http://${config.base_url}:${config.port}`,
      );
      seedSuperAdmin();
    });
    // myServer = server.listen(port, '0.0.0.0', () => {
    //   logger.info(`Server running on http://0.0.0.0:${port}`);
    //   seedSuperAdmin();
    // });

    // Global unhandled rejection handler
    process.on('unhandledRejection', (error) => {
      logger.error('Unhandled Rejection:', error);
      if (myServer) {
        // myServer.close(() => process.exit(1));
      } else {
        // process.exit(1);
      }
    });

    // Global termination signal handler
    process.on('SIGTERM', () => {
      logger.info('SIGTERM signal received');
      if (myServer) {
        myServer.close(() => logger.info('Server closed gracefully'));
      }
    });
  } catch (error) {
    errorLogger.error('Error in main function:', error);
    throw error;
  }
}

// Run the main function and log errors
main().catch((err) => errorLogger.error('Main function error:', err));
