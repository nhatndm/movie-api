import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

// PIPE
import { ValidationPipe } from './validation';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class PipeModule {}
