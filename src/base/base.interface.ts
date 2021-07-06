export class IResponse<T> {
  code: string;
  error?: string;
  data?: T;
}

export interface FuncResponsePromise<T, K> {
  (data: T): Promise<K>;
}
