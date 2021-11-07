"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var environments_1 = require("../environments/environments");
exports.default = axios_1.default.create({
    baseURL: environments_1.environments.api_url,
    headers: {
        "Content-type": "application/json"
    }
});
