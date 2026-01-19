import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModuleAModule } from './module-a/module-a.module';
import { ServiceAService } from './service-a/service-a.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

@Module({
  imports: [UserModule, ModuleAModule, AaaModule, BbbModule, CccModule, DddModule],
  controllers: [AppController],
  providers: [AppService, ServiceAService],
})
export class AppModule {}
