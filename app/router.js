"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
};
//# sourceMappingURL=router.js.map