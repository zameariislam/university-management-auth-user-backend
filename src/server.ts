import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import configure from './configure';



process.on('uncaughtException', error => {
  console.log(' uncaughtException is detected, we are closing now  ...')
   console.log(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(configure.database_url as string);
    console.log(`🛢   Database is connected successfully`);

    server = app.listen(configure.port, () => {
      console.log(`Application  listening on port ${configure.port}`);
    });
  } catch (err) {
    console.log('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    console.log(' unhandledRejection is detected, we are closing now  ...')
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});