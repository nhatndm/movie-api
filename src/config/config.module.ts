import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleNpm } from '@nestjs/config';

// SERVICE
import { AxiosService } from './axios.service';

@Module({
  imports: [
    ConfigModuleNpm.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AxiosService],
  exports: [AxiosService],
})
export class ConfigModule {}
