import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Optional,
  Param,
  ParseIntPipe,
  Post,
  Query,
  SetMetadata,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
  Headers as H,
  Ip,
  Session,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
import { Test } from '@nestjs/testing';
import { CreateAaaDto } from './aaa/dto/create-aaa.dto';
import { Eee } from './eee.decorator';
import { Fff } from './fff.decorator';
import { MyQuery } from './query.decorator';
import { Ppp } from './ppp.decorator';

// @Ppp()
@Controller()
// @SetMetadata('roles', ['user'])
@UseGuards(LoginGuard)

// @UseFilters(TestFilter)
// @UsePipes(ValidatePipe)
// @UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Inject(AppService)
  // private appService: AppService;

  //   @Optional()
  @Inject('FuHao')
  private readonly fuHao: Record<string, any>;

  @Get()
  //   @UseFilters(TestFilter)
  //   @UseGuards(LoginGuard)
  //   @UseInterceptors(TimeInterceptor)
  //   @UsePipes(ValidatePipe)
  //   @SetMetadata('roles', ['admin'])
  @Eee('admin')
  getHello(): string {
    // console.log('FuHao:', this.fuHao);
    // throw new BadRequestException('AppController getHello error');
    return this.appService.getHello();
  }

  @Get('aaa')
  //   @UseGuards(LoginGuard)
  aaa(): string {
    // console.log('aaa...');
    return 'aaa';
  }

  @Get('bbb')
  bbb(): string {
    // console.log('bbb...');
    return 'bbb';
  }

  //   @Get('ccc')
  //   ccc(@Query('num', ValidatePipe) num: number) {
  //     return num + 1;
  //   }

  //   @Get('ddd')
  //   @UseFilters(TestFilter)
  //   ccc(@Query('num', ValidatePipe) num: number) {
  //     return num + 1;
  //   }

  //   @Inject(OrderService)
  //   private orderService: OrderService;

  //   @Inject(EmployeeService)
  //   private employeeService: EmployeeService;

  //   @Get('/xxx/:aaa')
  //   getHello2(
  //     @Param('aaa', ParseIntPipe) aaa: number,
  //     @Query('bbb') bbb: string,
  //   ) {
  //     console.log(typeof aaa, typeof bbb);
  //     console.log(aaa, bbb);
  //     return 'hello';
  //   }

  @Post('/bbb')
  getHello3(@Body() aaa: CreateAaaDto) {
    console.log(aaa);
    return 'hello';
  }

  //   @Get('/ccc')
  //   header(@H('accept') accept: string, @H() headers: Record<string, any>) {
  //     console.log(accept, headers);
  //   }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip);
  }

  @Get('/session')
  session(@Session() session) {
    console.log(session);
  }

  @Get('hello4')
  getFff(@Fff() f): string {
    return f;
  }

  @Get('hello5')
  getMyQuery(@MyQuery('a') a, @MyQuery('b') b) {
    console.log('a', a);
    console.log('b', b);
  }
}
