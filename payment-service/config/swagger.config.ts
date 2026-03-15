import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger (app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle('Payment Service API')
    .setDescription('The payment service API description')
    .setVersion('1.0')
    .addTag('payments')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('payments/v1/api', app, documentFactory);
}