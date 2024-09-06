// validation-pipe.config.ts

import { ValidationPipe } from '@nestjs/common';
import { ApiError } from './ApiError';

export const validationPipe = new ValidationPipe({
  transform: true,
  whitelist: true,
  forbidNonWhitelisted: true,
  exceptionFactory: (errors) => {
    const messages = errors.map(
      (error) => `${Object.values(error.constraints).join(', ')}`,
    );
    console.log('🚀 ~ messages:', messages);
    return ApiError(400, `Validation failed : ${messages[0]}`, messages[1]);
  },
});
