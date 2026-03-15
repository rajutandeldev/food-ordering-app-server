import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger (app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle('Restaurants Service API')
    .setDescription('The Restaurants service API description')
    .setVersion('1.0')
    .addTag('Restaurants')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('restaurants/v1/api', app, documentFactory);
}