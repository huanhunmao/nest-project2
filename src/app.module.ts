import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModuleAModule } from './module-a/module-a.module';
import { ServiceAService } from './service-a/service-a.service';

@Module({
  imports: [UserModule, ModuleAModule],
  controllers: [AppController],
  providers: [AppService, ServiceAService],
})
export class AppModule {}
