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
})
export class ConfigModule {}
