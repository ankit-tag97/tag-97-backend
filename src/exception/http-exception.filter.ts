import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { join } from 'path';
import { Response, Request } from 'express';
import { writeFile } from 'fs/promises';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();
    const msg = exception.message;

    const body = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: msg,
      path: request.url,
    };
    this.writeHttpLog(body);
    response.status(status).json(body);
  }

  private async writeHttpLog(data: Record<string, any>) {
    const LODG_DIR = join(__dirname, `${Date.now()}-log.json`);

    try {
      await writeFile(LODG_DIR, JSON.stringify(data));
    } catch (err) {
      return;
    }
  }
}
