import { SetMetadata } from '@nestjs/common';

export const Eee = (...args: string[]) => SetMetadata('eee', args);
