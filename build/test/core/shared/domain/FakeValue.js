"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeValue = void 0;
const faker_1 = __importDefault(require("faker"));
class FakeValue {
    static get() {
        return faker_1.default;
    }
}
exports.FakeValue = FakeValue;
