import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// BASE RESPONSE
import { FuncResponsePromise } from '@app/base/base.interface';

export interface CustomAxiosPostRequest<T> extends AxiosRequestConfig {
  data?: T;
}

export interface CustomAxiosGetRequest<T> extends AxiosRequestConfig {
  params?: T;
}

@Injectable()
export class AxiosService {
  private readonly callApi: FuncResponsePromise<
    AxiosRequestConfig,
    AxiosResponse
  >;

  constructor() {
    this.callApi = (
      requestConfig: AxiosRequestConfig,
    ): Promise<AxiosResponse> => {
      const newRequestConfig: AxiosRequestConfig = {
        ...requestConfig,
      };

      return axios(newRequestConfig);
    };
  }

  post<L, K>(
    requestConfig: CustomAxiosPostRequest<L>,
  ): Promise<AxiosResponse<K>> {
    return this.callApi({ method: 'POST', ...requestConfig });
  }

  get<L, K>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<K>> {
    return this.callApi({ method: 'GET', ...requestConfig });
  }

  delete<L, K>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<K>> {
    return this.callApi({ method: 'DELETE', ...requestConfig });
  }

  put<L, K>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<K>> {
    return this.callApi({ method: 'PUT', ...requestConfig });
  }

  patch<L, K>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<K>> {
    return this.callApi({ method: 'PATCH', ...requestConfig });
  }
}
