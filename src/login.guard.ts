import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  //   @Inject(AppService)
  //   private appService: AppService;

  //   @Inject(Reflector)
  //   private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log('login check', this.appService.getHello());

    // const eee = this.reflector.getAllAndOverride<string[]>('eee', [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    // console.log('eee:', eee);

    return true;
  }
}
