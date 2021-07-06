import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

// INTERCEPTION
import { AppInterceptor } from './logging';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AppInterceptor,
    },
  ],
})
export class InterceptorModule {}
