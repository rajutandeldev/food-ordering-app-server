import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger (app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle('Order Service API')
    .setDescription('The order service API description')
    .setVersion('1.0')
    .addTag('orders')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('orders/v1/api', app, documentFactory);
}