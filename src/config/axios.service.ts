import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

// BASE RESPONSE
import { IResponse, FuncResponsePromise } from '@app/base/base.interface';

export interface CustomAxiosPostRequest<T> extends AxiosRequestConfig {
  data?: T;
}

export interface CustomAxiosGetRequest<T> extends AxiosRequestConfig {
  params?: T;
}

@Injectable()
export class AxiosService<T> {
  private readonly callApi: FuncResponsePromise<
    AxiosRequestConfig,
    AxiosResponse<IResponse<T>>
  >;

  constructor() {
    this.callApi = (
      requestConfig: AxiosRequestConfig,
    ): Promise<AxiosResponse<IResponse<T>>> => {
      const headers = {
        'Content-Type': 'application/json',
      };

      const newRequestConfig: AxiosRequestConfig = {
        ...requestConfig,
      };

      return axios(newRequestConfig);
    };
  }

  post<L>(
    requestConfig: CustomAxiosPostRequest<L>,
  ): Promise<AxiosResponse<IResponse<T>>> {
    return this.callApi({ method: 'POST', ...requestConfig });
  }

  get<L>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<IResponse<T>>> {
    return this.callApi({ method: 'POST', ...requestConfig });
  }

  delete<L>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<IResponse<T>>> {
    return this.callApi({ method: 'DELETE', ...requestConfig });
  }

  put<L>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<IResponse<T>>> {
    return this.callApi({ method: 'PUT', ...requestConfig });
  }

  patch<L>(
    requestConfig: CustomAxiosGetRequest<L>,
  ): Promise<AxiosResponse<IResponse<T>>> {
    return this.callApi({ method: 'PATCH', ...requestConfig });
  }
}
