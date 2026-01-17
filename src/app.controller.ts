import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Inject(AppService)
  // private appService: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //   @Inject(OrderService)
  //   private orderService: OrderService;

  //   @Inject(EmployeeService)
  //   private employeeService: EmployeeService;
}
