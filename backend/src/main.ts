import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {configConstants} from './config/envConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configConstants.PORT);
}
bootstrap();
