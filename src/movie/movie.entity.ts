// BASE
import { BaseEntity } from '@app/base/base.entity';

export class MovieEntity extends BaseEntity {
  adult: boolean;
  original_language: string;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
}
