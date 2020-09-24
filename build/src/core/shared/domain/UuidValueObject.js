"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidValueObject = void 0;
const isUUID_1 = __importDefault(require("validator/lib/isUUID"));
const ValueObject_1 = require("./ValueObject");
class UuidValueObject extends ValueObject_1.ValueObject {
    constructor(id) {
        super(id);
        UuidValueObject.isValidUuid(id);
    }
    static isValidUuid(id) {
        if (!isUUID_1.default(id, 4)) {
            throw new Error('Invalid UUID');
        }
    }
}
exports.UuidValueObject = UuidValueObject;
