import { requestCounter } from './requestCount.js';
import { activeRequestsGauge } from './activeRequests.js';
export const metricMiddleware = (req, res, next) => {
    const startTime = Date.now();
    res.on('finish', () => {
        activeRequestsGauge.inc();
        console.log(`activeUsers are ${activeRequestsGauge.inc()}`);
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
};
//# sourceMappingURL=index.js.map