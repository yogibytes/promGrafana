import { NextFunction, Request, Response } from 'express';
import { requestCounter } from './requestCount.js'
import { activeRequestsGauge } from './activeRequests.js'
export const metricMiddleware = (next: NextFunction, req:Request , res:Response)=>{
    const startTime = Date.now();
    res.on('finish', () => {
        const endTime = Date.now();
        console.log(`Request took ${startTime - endTime} ms`);

        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });
        activeRequestsGauge.dec();
        
    });
    next();
}
