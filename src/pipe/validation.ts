/* eslint-disable @typescript-eslint/ban-types */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

// RESPONSE
import { IResponse } from '@app/base/base.interface';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const data: IResponse<string> = {
        code: HttpStatus.BAD_REQUEST,
        error: JSON.stringify(this.buildError(errors)),
      };

      throw new HttpException(data, HttpStatus.BAD_REQUEST);
    }

    return value;
  }

  private buildError(errors: ValidationError[]): Record<string, string> {
    const result = {};
    errors.forEach((el) => {
      const prop = el.property;
      Object.entries(el.constraints).forEach((constraint) => {
        result[prop + constraint[0]] = `${constraint[1]}`;
      });
    });

    return result;
  }
}
