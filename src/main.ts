import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cors());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.setGlobalPrefix('api');

  app.useStaticAssets(join(process.cwd(), 'client/build'));

  app.useStaticAssets(join(process.cwd(), 'uploads/images'), {
    prefix: '/uploads/images',
  });

  app.use((req, res, next) => {
    if (
      req.originalUrl.startsWith('/api') ||
      req.originalUrl.startsWith('/uploads/images')
    ) {
      return next();
    }
    res.sendFile(join(process.cwd(), 'client/build', 'index.html'));
  });

  await app.listen(8000);
  console.log('Server running on http://localhost:8000');
}

bootstrap();
