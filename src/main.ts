import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let cors = require('cors')
  app.use(cors())
  /*app.enableCors();*/
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3002);
}
bootstrap();


