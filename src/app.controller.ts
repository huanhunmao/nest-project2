import {
  Controller,
  Get,
  Inject,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()

// @UseFilters(TestFilter)
// @UsePipes(ValidatePipe)
// @UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Inject(AppService)
  // private appService: AppService;

  @Get()
  getHello(): string {
    console.log('handler......');
    return this.appService.getHello();
  }

  @Get('aaa')
  //   @UseGuards(LoginGuard)
  aaa(): string {
    console.log('aaa...');
    return 'aaa';
  }

  @Get('bbb')
  bbb(): string {
    console.log('bbb...');
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
}
