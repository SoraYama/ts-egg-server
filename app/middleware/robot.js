"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (options, app) => {
    return async function robotMiddleware(ctx, next) {
        const source = ctx.get('user-agent') || '';
        const match = options.ua.some(ua => ua.test(source));
        if (match) {
            ctx.status = 403;
            ctx.message = 'Go Away, robot.';
        }
        else {
            await next();
        }
    };
};
//# sourceMappingURL=robot.js.map