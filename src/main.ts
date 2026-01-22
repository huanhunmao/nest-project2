import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction } from 'express';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public', { prefix: '/static' });

  //   app.use(function (req: Request, res: Response, next: NextFunction) {
  //     console.log('before111', req.url);
  //     next();
  //     console.log('after111');
  //   });

  //   app.useGlobalGuards(new LoginGuard());
  //   app.useGlobalInterceptors(new TimeInterceptor());
  // app.useGlobalPipes(new ValidatePipe())
  //   app.useGlobalFilters(new TestFilter());

  app.use(
    session({
      secret: 'fuhao',
      cookie: { maxAge: 60000 },
    }),
  );
  await app.listen(3000);

  setTimeout(() => {
    app.close();
  }, 2000);
}
bootstrap();
