import { Controller, Get, Query } from '@nestjs/common';

// ENTITY
import { MovieEntity } from './movie.entity';

// BASE
import { PaginationResponse } from '@app/base/base.interface';

// SERVICE
import { AxiosService } from '@app/config/axios.service';

// CONSTANT
import { API_ROUTE } from '@app/constant/route';

// DTO
import { GetMoviesDTO, GetMoviewType } from './movie.dto';

@Controller(API_ROUTE.MOVIE)
export class MovieController {
  private readonly movieDBUrl: string;
  private readonly movieAPIKEY: string;
  private readonly fullAPI: string;

  constructor(private readonly axiosService: AxiosService) {
    this.movieAPIKEY = process.env.THE_MOVIE_API_KEY;
    this.movieDBUrl = process.env.THE_MOVIE_API_URL;

    this.fullAPI = `${this.movieDBUrl}/3/discover/movie?api_key=${this.movieAPIKEY}`;
  }

  @Get('/')
  async videos(
    @Query() movieDTO: GetMoviesDTO,
  ): Promise<PaginationResponse<MovieEntity>> {
    const responseFromMovieDB = await this.axiosService.get<
      GetMoviesDTO,
      PaginationResponse<MovieEntity>
    >({
      params: movieDTO,
      url: this.fullAPI,
    });

    return responseFromMovieDB.data;
  }
}
