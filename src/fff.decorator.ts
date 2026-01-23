import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Fff = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return 'fff';
  },
);
