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
exports.GetCustomerData = void 0;
class GetCustomerData {
    constructor(customerRepository) {
        this._customerRepository = customerRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this._customerRepository.findById(id);
            return {
                id: customer.id.value,
                idNumber: customer.idNumber.value,
                firstName: customer.firstName.value,
                lastName: customer.lastName.value,
                phoneNumber: customer.phoneNumber.value
            };
        });
    }
}
exports.GetCustomerData = GetCustomerData;
