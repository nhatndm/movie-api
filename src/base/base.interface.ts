import { IsNotEmpty } from 'class-validator';
export class IResponse<T> {
  code: number;
  error?: string;
  data?: T;
}

export interface FuncResponsePromise<T, K> {
  (data: T): Promise<K>;
}

export class PaginationResponse<T> {
  page: number;
  data: T[];
  total_results: number;
  total_pages: number;
}

export class PaginationRequest {
  @IsNotEmpty()
  page: number;
}
