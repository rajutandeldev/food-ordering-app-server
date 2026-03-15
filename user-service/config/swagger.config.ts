import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger (app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle('User Service API')
    .setDescription('The user service API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('user/v1/api', app, documentFactory);
}