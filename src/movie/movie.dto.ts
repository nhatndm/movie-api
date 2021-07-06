import { IsEnum, IsNotEmpty } from 'class-validator';

// BASE
import { PaginationRequest } from '@app/base/base.interface';

export enum GetMoviewType {
  POPULAR = 'popularity.desc',
  LATEST = 'primary_release_date.desc',
}

export class GetMoviesDTO extends PaginationRequest {
  @IsNotEmpty()
  @IsEnum(GetMoviewType)
  sort_by: GetMoviewType;
}
