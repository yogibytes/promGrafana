import { NextFunction, Request, Response } from 'express';
import { requestCounter } from './requestCount.js'
import { activeRequestsGauge } from './activeRequests.js'
import {httpRequestDurationMicroseconds } from './requestTime.js'
export const metricMiddleware = (req:Request , res:Response,next: NextFunction )=>{
    const startTime = Date.now();

    res.on('finish', () => {
    
        activeRequestsGauge.inc();
        console.log(`activeUsers are ${activeRequestsGauge.inc()}`)
        const endTime = Date.now();
        const duration =  endTime - startTime ;
        console.log(`Request took ${duration} ms`);
        
        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });

        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
        }, duration);

        activeRequestsGauge.dec();
   
    });
 
    next();
}
