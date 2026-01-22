import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModuleAModule } from './module-a/module-a.module';
import { ServiceAService } from './service-a/service-a.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';
import { LogMiddleware } from './log.middleware';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { AaaController } from './aaa.controller';

@Module({
  imports: [
    UserModule,
    ModuleAModule,
    AaaModule,
    BbbModule,
    CccModule,
    DddModule,
  ],
  controllers: [AppController, AaaController],
  providers: [
    AppService,
    ServiceAService,
    // {
    //   provide: 'APP_GUARD',
    //   useClass: LoginGuard,
    // },
    // {
    //   provide: 'APP_INTERCEPTOR',
    //   useClass: TimeInterceptor,
    // },
    // {
    //   provide: 'APP_PIPE',
    //   useClass: ValidatePipe,
    // },
    {
      provide: 'FuHao',
      useFactory() {
        return {
          name: 'FuHao',
        };
      },
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('aaa', 'aaa/*path');
  }
}
