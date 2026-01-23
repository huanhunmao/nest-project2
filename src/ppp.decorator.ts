import { applyDecorators, Controller, SetMetadata } from '@nestjs/common';

// export const Ppp = () => Controller('ppp');

// 多个
export const Ppp = () => (path, metadata) => {
  return applyDecorators(Controller('ppp'), SetMetadata('qqq', metadata));
};
