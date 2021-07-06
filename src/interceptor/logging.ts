import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { transports, format, createLogger } from 'winston';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logger = createLogger({
      level: 'info',
      format: format.json(),
      transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
      ],
    });

    const controller = context.getClass().name;
    const func = context.getHandler().name;
    const httpMethod = context.switchToHttp().getRequest().method;

    return next.handle().pipe(
      tap({
        error: (exception) => {
          logger.log({
            level: 'error',
            message: JSON.stringify({
              error: exception,
              httpMethod,
              controller,
              func,
            }),
          });
        },
      }),
    );
  }
}
