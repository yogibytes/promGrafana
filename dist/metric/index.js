import { requestCounter } from './requestCount.js';
import { activeRequestsGauge } from './activeRequests.js';
export const metricMiddleware = (next, req, res) => {
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
};
//# sourceMappingURL=index.js.map