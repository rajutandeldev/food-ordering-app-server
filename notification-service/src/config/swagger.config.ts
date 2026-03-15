import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger (app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle('Notification Service API')
    .setDescription('The notification service API description')
    .setVersion('1.0')
    .addTag('notifications')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('notification/v1/api', app, documentFactory);
}