import client from 'prom-client';
import { Request, NextFunction, Response } from 'express';
export declare const requestCounter: client.Counter<"method" | "route" | "status_code">;
export declare const requestCountMiddleware: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=requestCount.d.ts.map