import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// MODULE
import { ConfigModule } from '@app/config/config.module';
import { PipeModule } from '@app/pipe/pipe.module';
import { MovieModule } from '@app/movie/movie.module';
import { InterceptorModule } from '@app/interceptor';

@Module({
  imports: [ConfigModule, PipeModule, MovieModule, InterceptorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
