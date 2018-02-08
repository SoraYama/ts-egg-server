"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const momont = require("moment");
exports.relativeTime = (time) => momont(new Date(time * 1000)).fromNow();
//# sourceMappingURL=helper.js.map