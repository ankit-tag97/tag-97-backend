import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { IdException } from './id-exception';
import { Response } from 'express';

@Catch(IdException)
export class IdExceptionFilter implements ExceptionFilter {
  catch(exception: IdException, host: ArgumentsHost) {
    const body = {
      message: exception.message,
      Error: 'Id Error',
    };
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    response.status(HttpStatus.BAD_REQUEST).json(body);
  }
}
