import { Module } from '@nestjs/common';

// MODULE
import { ConfigModule } from '@app/config/config.module';

// CONTROLLER
import { MovieController } from './movie.controller';
@Module({
  imports: [ConfigModule],
  controllers: [MovieController],
  providers: [],
})
export class MovieModule {}
