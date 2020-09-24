"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomer = void 0;
const Customer_1 = require("../domain/Customer");
class CreateCustomer {
    constructor(customerRepository) {
        this._customerRepository = customerRepository;
    }
    execute(id, idNumber, firstName, lastName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = Customer_1.Customer.create(id, idNumber, firstName, lastName, phoneNumber);
            yield this._customerRepository.save(customer);
        });
    }
}
exports.CreateCustomer = CreateCustomer;
