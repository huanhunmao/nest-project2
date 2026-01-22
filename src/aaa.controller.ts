import { Controller, Get, HostParam, Redirect, Req } from '@nestjs/common';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  //   @Redirect('https://www.baidu.com')
  hello(@HostParam('host') host) {
    return host;
  }

  //   @Get('ccc')
  //   ccc(@Req() req: Request) {
  //     console.log(req.headers);
  //     console.log(req.url);
  //   }
}
