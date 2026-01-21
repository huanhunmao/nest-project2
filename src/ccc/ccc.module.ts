import { Aaa } from './../aaa/entities/aaa.entity';
import {
  Module,
  OnApplicationBootstrap,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule {
  constructor(private readonly moduleRef: ModuleRef) {}

  //   onModuleInit() {
  //     console.log('CccModule onModuleInit');
  //   }

  //   onApplicationBootstrap() {
  //     console.log('CccModule onApplicationBootstrap');
  //   }
  //   onApplicationShutdown() {
  //     const cccService = this.moduleRef.get<CccService>(CccService);
  //     console.log('--------------------------', cccService.findAll());

  //     console.log('CccModule onApplicationShutdown');
  //   }
}
