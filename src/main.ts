import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

function initSwagger(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Slack Bot')
    .setDescription('With a Slack Bot, an example application.')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  await app.listen(3000);
}
bootstrap();
