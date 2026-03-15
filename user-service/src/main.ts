import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import { AppModule } from 'src/app.module';
import { setupSwagger } from 'config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  dotenv.config();

  app.use(helmet());
  app.enableCors();


  setupSwagger(app);
    console.log(`User service is running on port ${process.env.PORT ?? 3005}`);

  await app.listen(process.env.PORT ?? 3004);
}
bootstrap();
