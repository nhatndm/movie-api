import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleNpm } from '@nestjs/config';

@Module({
  imports: [
    ConfigModuleNpm.forRoot({
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
