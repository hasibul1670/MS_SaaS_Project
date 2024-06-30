// validation-pipe.config.ts

import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { ApiError } from './ApiError';

export const validationPipe = new ValidationPipe({
  transform: true,
  whitelist: true,
  forbidNonWhitelisted: true,
  exceptionFactory: (errors) => {
    const messages = errors.map(
      (error) => `${Object.values(error.constraints).join(', ')}`,
    );
    return ApiError(
      HttpStatus.BAD_REQUEST,
      'Validation failed',
      messages.join(' | '),
    );
  },
});
