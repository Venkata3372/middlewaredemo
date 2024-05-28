import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request...`);
    console.log("Hello from Artifixel Technologies")
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
  }
}
